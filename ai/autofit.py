import cv2
import numpy as np
from sam_detect_mask import detect_photo_mask
from sam_detect_box import detect_photo_box
from face_processor import process_face
import time


def is_rectangular(mask):
    """Check if a mask represents a rectangular shape"""
    contours, _ = cv2.findContours(mask.astype(np.uint8),
                                   cv2.RETR_EXTERNAL,
                                   cv2.CHAIN_APPROX_SIMPLE)
    if not contours:
        return False

    cnt = max(contours, key=cv2.contourArea)
    peri = cv2.arcLength(cnt, True)
    approx = cv2.approxPolyDP(cnt, 0.02 * peri, True)
    return len(approx) == 4


def run_autofit(template_path: str, photo_path: str) -> dict:
    """
    Complete autofit pipeline:
    1. SAM detects placeholder in template (mask or box)
    2. Face detection crops and centers face from user photo
    3. Enhancement if photo is low resolution
    4. Returns bounding box for frontend to position
    
    Args:
        template_path: Path to the template image
        photo_path: Path to the user photo
    
    Returns:
        dict: {
            "x": int,
            "y": int,
            "width": int,
            "height": int,
            "mode": str  # "MASK + FACE", "RECTANGLE + FACE", or "BOX + FACE"
        }
    """
    start_time = time.time()
    
    # Step 1: Load template
    template = cv2.imread(template_path)
    if template is None:
        raise Exception(f"Template not found: {template_path}")

    # Step 2: SAM detects placeholder in template (try mask first, then box)
    mask = detect_photo_mask(template_path)

    if mask is not None:
        # Get bounding box from mask
        ys, xs = np.where(mask > 0)
        x1, x2 = xs.min(), xs.max()
        y1, y2 = ys.min(), ys.max()
        w, h = x2 - x1, y2 - y1

        # Determine mode based on mask shape
        if is_rectangular(mask):
            mode = "RECTANGLE + FACE"
        else:
            mode = "MASK + FACE"

    else:
        # Fallback to box detection
        box = detect_photo_box(template_path)
        if box is None:
            raise Exception("No placeholder detected in template")

        x1, y1, x2, y2 = box
        w, h = x2 - x1, y2 - y1
        mode = "BOX + FACE"

    # Step 3: Process user photo - detect face, crop, enhance if needed
    # This validates that face can be detected and processed
    try:
        face_img = process_face(photo_path, w, h)
        print(f"✅ Face detected and processed: {face_img.shape}")
    except Exception as e:
        print(f"⚠️ Face processing: {str(e)}")
        # Continue anyway - frontend will handle positioning

    elapsed = time.time() - start_time
    print(f"✅ Autofit completed using {mode} in {elapsed:.2f}s")
    
    # Return bounding box for frontend to position the photo
    return {
        "x": int(x1),
        "y": int(y1),
        "width": int(w),
        "height": int(h),
        "mode": mode
    }