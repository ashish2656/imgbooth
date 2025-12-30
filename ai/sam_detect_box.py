import cv2
import numpy as np
from segment_anything import sam_model_registry, SamAutomaticMaskGenerator

# Global model cache
_sam_model = None
_mask_generator = None


def get_sam_model():
    """Load SAM model once and cache it"""
    global _sam_model, _mask_generator
    
    if _sam_model is None:
        print("🔄 Loading SAM model (first time only)...")
        _sam_model = sam_model_registry["vit_b"](checkpoint="models/sam_vit_b.pth")
        _mask_generator = SamAutomaticMaskGenerator(
            _sam_model,
            points_per_side=16,
            pred_iou_thresh=0.88,
            stability_score_thresh=0.88,
            min_mask_region_area=8000,
        )
        print("✅ SAM model loaded")
    
    return _mask_generator


def detect_photo_box(image_path, debug=True):
    image = cv2.imread(image_path)
    if image is None:
        return None

    image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    h_img, w_img = gray.shape

    mask_generator = get_sam_model()

    masks = mask_generator.generate(image_rgb)
    edges = cv2.Canny(gray, 80, 160)

    candidates = []

    for m in masks:
        seg = m["segmentation"].astype(np.uint8)
        x, y, w, h = cv2.boundingRect(seg)

        area = w * h
        area_ratio = area / (w_img * h_img)
        aspect = w / h if h else 0

        if area_ratio > 0.25:
            continue
        if not (0.6 < aspect < 1.6):
            continue

        roi_edges = edges[y:y+h, x:x+w]
        edge_density = np.sum(roi_edges > 0) / (area + 1e-6)
        if edge_density > 0.12:
            continue

        # Check if box is empty (prefer empty boxes over filled ones)
        roi = gray[y:y+h, x:x+w]
        content_variance = np.var(roi)
        is_empty = content_variance < 500  # Low variance = mostly uniform/empty
        emptiness_score = 5.0 if is_empty else 0.0
        
        # Check brightness - empty boxes tend to be lighter
        mean_brightness = np.mean(roi)
        brightness_score = mean_brightness / 255.0 * 2.0

        score = (
            (1 - edge_density) * 3 +
            (1 - abs(1 - aspect)) * 2 +
            (1 - area_ratio) +
            emptiness_score +
            brightness_score
        )

        candidates.append((score, x, y, w, h))

        if debug:
            cv2.rectangle(image, (x, y), (x+w, y+h), (0, 255, 0), 2)

    if debug:
        cv2.imwrite("debug_boxes.png", image)
        print(f"[DEBUG] Box candidates: {len(candidates)}")

    if not candidates:
        return None

    candidates.sort(key=lambda x: x[0], reverse=True)
    _, x, y, w, h = candidates[0]

    return x, y, x + w, y + h