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


def detect_photo_mask(image_path, debug=True):
    image = cv2.imread(image_path)
    if image is None:
        return None

    image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    h_img, w_img = gray.shape
    edges = cv2.Canny(gray, 80, 160)

    mask_generator = get_sam_model()

    masks = mask_generator.generate(image_rgb)
    candidates = []

    debug_img = image.copy()

    for m in masks:
        seg = m["segmentation"].astype(np.uint8)
        x, y, w, h = cv2.boundingRect(seg)

        area = w * h
        area_ratio = area / (w_img * h_img)
        if not (0.05 < area_ratio < 0.25):
            continue

        roi_edges = edges[y:y+h, x:x+w]
        edge_density = np.sum(roi_edges > 0) / (area + 1e-6)
        if edge_density > 0.08:
            continue

        contours, _ = cv2.findContours(seg, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
        if not contours:
            continue

        cnt = max(contours, key=cv2.contourArea)
        hull = cv2.convexHull(cnt)

        solidity = cv2.contourArea(cnt) / (cv2.contourArea(hull) + 1e-6)
        peri = cv2.arcLength(cnt, True)
        circularity = (4 * np.pi * cv2.contourArea(cnt)) / (peri * peri + 1e-6)

        center_y = y + h / 2
        vertical_bias = 1 - abs(center_y / h_img - 0.5)

        # Check if region is empty (prefer empty boxes)
        roi = gray[y:y+h, x:x+w]
        content_variance = np.var(roi)
        is_empty = content_variance < 500
        emptiness_score = 5.0 if is_empty else 0.0
        
        # Check brightness - empty regions tend to be lighter
        mean_brightness = np.mean(roi)
        brightness_score = mean_brightness / 255.0 * 2.0

        score = (
            circularity * 3 +
            solidity * 2 +
            (1 - edge_density) * 3 +
            vertical_bias +
            emptiness_score +
            brightness_score
        )

        candidates.append((score, seg))

        if debug:
            cv2.rectangle(debug_img, (x, y), (x+w, y+h), (0, 255, 0), 2)

    if debug:
        cv2.imwrite("debug_masks.png", debug_img)
        print(f"[DEBUG] Mask candidates: {len(candidates)}")

    if not candidates:
        return None

    candidates.sort(key=lambda x: x[0], reverse=True)
    return candidates[0][1]