import cv2
import numpy as np
from PIL import Image, ImageEnhance, ImageFilter
import os

# Get absolute path for models
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
EDSR_MODEL_PATH = os.path.join(SCRIPT_DIR, "models", "EDSR_x2.pb")

# Initialize OpenCV DNN face detector (more accurate than Haar Cascade)
DNN_FACE_DETECTOR = None
try:
    # Use OpenCV's DNN face detector (Caffe model)
    prototxt = cv2.data.haarcascades.replace('haarcascades/', '') + '../dnn/deploy.prototxt'
    model = cv2.data.haarcascades.replace('haarcascades/', '') + '../dnn/res10_300x300_ssd_iter_140000.caffemodel'
    if os.path.exists(prototxt) and os.path.exists(model):
        DNN_FACE_DETECTOR = cv2.dnn.readNetFromCaffe(prototxt, model)
        print("✅ Using OpenCV DNN face detector")
except Exception as e:
    print(f"⚠️  DNN face detector not available: {e}")

print(f"📁 EDSR model path: {EDSR_MODEL_PATH}")


def detect_face_box(image):
    """Detect face using OpenCV with multiple detection methods."""
    h, w = image.shape[:2]
    
    # Method 1: Try OpenCV DNN detector first (most accurate)
    if DNN_FACE_DETECTOR is not None:
        try:
            blob = cv2.dnn.blobFromImage(cv2.resize(image, (300, 300)), 1.0, (300, 300), (104.0, 177.0, 123.0))
            DNN_FACE_DETECTOR.setInput(blob)
            detections = DNN_FACE_DETECTOR.forward()
            
            best_detection = None
            best_confidence = 0.5  # Minimum confidence threshold
            
            for i in range(detections.shape[2]):
                confidence = detections[0, 0, i, 2]
                if confidence > best_confidence:
                    best_confidence = confidence
                    box = detections[0, 0, i, 3:7] * np.array([w, h, w, h])
                    best_detection = box.astype("int")
            
            if best_detection is not None:
                x1, y1, x2, y2 = best_detection
                print(f"✅ DNN detected face with confidence: {best_confidence:.2f}")
                return (x1, y1, x2 - x1, y2 - y1)
        except Exception as e:
            print(f"⚠️  DNN detection failed: {e}")
    
    # Method 2: Haar Cascade with multiple cascades
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    
    # Try default cascade first
    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(50, 50))
    
    if len(faces) == 0:
        # Try alternate cascade (better for different angles)
        face_cascade_alt = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_alt2.xml')
        faces = face_cascade_alt.detectMultiScale(gray, scaleFactor=1.05, minNeighbors=4, minSize=(40, 40))
    
    if len(faces) == 0:
        # Try alt tree cascade (better for varied lighting)
        face_cascade_alt_tree = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_alt_tree.xml')
        faces = face_cascade_alt_tree.detectMultiScale(gray, scaleFactor=1.05, minNeighbors=3, minSize=(30, 30))
    
    if len(faces) == 0:
        return None
    
    # Filter by aspect ratio (faces are roughly square)
    valid_faces = []
    for (x, y, fw, fh) in faces:
        aspect_ratio = fw / fh
        if 0.6 <= aspect_ratio <= 1.5:
            valid_faces.append((x, y, fw, fh, fw * fh))
    
    if len(valid_faces) == 0:
        # Use largest detection if no valid aspect ratio
        x, y, fw, fh = max(faces, key=lambda f: f[2] * f[3])
        print(f"✅ Haar Cascade detected face at: ({x}, {y}, {fw}, {fh})")
        return (x, y, fw, fh)
    
    # Return largest valid face
    valid_faces.sort(key=lambda f: f[4], reverse=True)
    x, y, fw, fh, _ = valid_faces[0]
    print(f"✅ Haar Cascade detected face at: ({x}, {y}, {fw}, {fh})")
    return (x, y, fw, fh)


def crop_face(image, face_box, aspect_ratio):
    """
    Crop image around detected face with smart padding and aspect ratio handling.
    
    Args:
        image: Input image
        face_box: (x, y, w, h) of detected face
        aspect_ratio: Target width/height ratio
    
    Returns:
        Cropped image with face centered
    """
    x, y, w, h = face_box
    img_h, img_w = image.shape[:2]

    # Calculate face center
    cx = x + w // 2
    cy = y + h // 2

    # Scale factor to include context around face (2.0 = moderate context)
    scale = 2.0
    
    # Calculate target dimensions based on face size and aspect ratio
    new_h = int(h * scale)
    new_w = int(new_h * aspect_ratio)
    
    # Center the crop around the face
    x1 = cx - new_w // 2
    y1 = cy - new_h // 2
    x2 = x1 + new_w
    y2 = y1 + new_h
    
    # Handle boundaries - pad if crop extends beyond image
    pad_left = max(0, -x1)
    pad_top = max(0, -y1)
    pad_right = max(0, x2 - img_w)
    pad_bottom = max(0, y2 - img_h)
    
    # Adjust crop coordinates to image boundaries
    x1 = max(0, x1)
    y1 = max(0, y1)
    x2 = min(img_w, x2)
    y2 = min(img_h, y2)
    
    # Crop the image
    cropped = image[y1:y2, x1:x2]
    
    # Add padding if needed (with reflection to avoid black borders)
    if pad_left > 0 or pad_top > 0 or pad_right > 0 or pad_bottom > 0:
        cropped = cv2.copyMakeBorder(
            cropped,
            pad_top, pad_bottom, pad_left, pad_right,
            cv2.BORDER_REFLECT_101
        )
    
    return cropped


def is_pixelated(image):
    """Check if image is low resolution."""
    return min(image.shape[:2]) < 300


def enhance_image(image):
    """
    Enhance image using EDSR super-resolution model + PIL enhancements.
    Always applies EDSR for best quality.
    """
    original_size = image.shape[:2]
    
    # Always use EDSR for quality enhancement
    try:
        print(f"🤖 Applying EDSR super-resolution from: {EDSR_MODEL_PATH}")
        sr = cv2.dnn_superres.DnnSuperResImpl_create()
        sr.readModel(EDSR_MODEL_PATH)
        sr.setModel("edsr", 2)
        image = sr.upsample(image)
        print(f"✅ EDSR upscaled: {original_size} -> {image.shape[:2]}")
    except Exception as e:
        print(f"⚠️  EDSR failed: {e}")
    
    # Convert to PIL for additional enhancement
    rgb_image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    pil_img = Image.fromarray(rgb_image)
    
    # Gentle enhancements
    enhancer = ImageEnhance.Sharpness(pil_img)
    pil_img = enhancer.enhance(1.15)
    
    enhancer = ImageEnhance.Contrast(pil_img)
    pil_img = enhancer.enhance(1.08)
    
    enhancer = ImageEnhance.Color(pil_img)
    pil_img = enhancer.enhance(1.05)
    
    # Convert back to OpenCV format
    enhanced_array = np.array(pil_img)
    enhanced_bgr = cv2.cvtColor(enhanced_array, cv2.COLOR_RGB2BGR)
    
    return enhanced_bgr


def process_face(photo_path, target_w, target_h):
    """
    Process a photo: detect face, crop intelligently, enhance with EDSR, and resize.
    
    Args:
        photo_path: Path to the input photo
        target_w: Target width
        target_h: Target height
    
    Returns:
        Processed image ready for placement
    """
    image = cv2.imread(photo_path)
    if image is None:
        raise Exception("Photo not found or cannot be loaded")

    print(f"📸 Processing image: {image.shape[:2]}")
    
    # Detect face
    face_box = detect_face_box(image)
    
    if face_box:
        # Face detected - crop around it
        print(f"✅ Face detected at: {face_box}")
        cropped = crop_face(image, face_box, target_w / target_h)
        
        # Always enhance with EDSR for best quality
        print(f"🔧 Enhancing cropped image: {cropped.shape[:2]}")
        cropped = enhance_image(cropped)
        
        # Resize to target dimensions
        resized = cv2.resize(cropped, (target_w, target_h), interpolation=cv2.INTER_LANCZOS4)
        
        # Apply subtle sharpening for final polish
        kernel = np.array([[0, -0.5, 0],
                           [-0.5, 3, -0.5],
                           [0, -0.5, 0]])
        sharpened = cv2.filter2D(resized, -1, kernel)
        return sharpened
    else:
        # No face detected - use center crop without enhancement
        print(f"⚠️  No face detected, using center crop")
        h, w = image.shape[:2]
        aspect_ratio = target_w / target_h
        
        if w / h > aspect_ratio:
            new_w = int(h * aspect_ratio)
            x_offset = (w - new_w) // 2
            cropped = image[:, x_offset:x_offset + new_w]
        else:
            new_h = int(w / aspect_ratio)
            y_offset = (h - new_h) // 2
            cropped = image[y_offset:y_offset + new_h, :]
        
        resized = cv2.resize(cropped, (target_w, target_h), interpolation=cv2.INTER_LANCZOS4)
        return resized
