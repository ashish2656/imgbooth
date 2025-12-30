import cv2
import mediapipe as mp
import numpy as np

mp_face = mp.solutions.face_detection


def detect_face_box(image):
    image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

    with mp_face.FaceDetection(
        model_selection=1,
        min_detection_confidence=0.6
    ) as fd:

        results = fd.process(image_rgb)
        if not results.detections:
            return None

        h, w, _ = image.shape
        best_box = None
        best_area = 0

        for d in results.detections:
            b = d.location_data.relative_bounding_box
            x = int(b.xmin * w)
            y = int(b.ymin * h)
            bw = int(b.width * w)
            bh = int(b.height * h)

            area = bw * bh
            if area > best_area:
                best_area = area
                best_box = (x, y, bw, bh)

        return best_box


def crop_face(image, face_box, aspect_ratio):
    x, y, w, h = face_box
    img_h, img_w = image.shape[:2]

    cx = x + w // 2
    cy = y + h // 2

    scale = 2.0
    new_h = int(h * scale)
    new_w = int(new_h * aspect_ratio)

    x1 = max(cx - new_w // 2, 0)
    y1 = max(cy - new_h // 2, 0)
    x2 = min(x1 + new_w, img_w)
    y2 = min(y1 + new_h, img_h)

    return image[y1:y2, x1:x2]


def is_pixelated(image):
    return min(image.shape[:2]) < 300


def enhance_image(image):
    sr = cv2.dnn_superres.DnnSuperResImpl_create()
    sr.readModel("models/EDSR_x2.pb")
    sr.setModel("edsr", 2)
    return sr.upsample(image)


def process_face(photo_path, target_w, target_h):
    image = cv2.imread(photo_path)
    if image is None:
        raise Exception("Photo not found")

    face_box = detect_face_box(image)
    cropped = crop_face(image, face_box, target_w / target_h) if face_box else image

    if is_pixelated(cropped):
        cropped = enhance_image(cropped)

    return cv2.resize(cropped, (target_w, target_h))