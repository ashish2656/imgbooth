import cv2
import numpy as np
from collections import Counter


def get_dominant_text_color(template_path):
    """
    Analyze template to detect dominant text/dark colors
    Returns RGB color as hex string
    """
    image = cv2.imread(template_path)
    if image is None:
        return "#000000"
    
    # Convert to grayscale to detect dark regions (likely text)
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    
    # Threshold to find dark regions (text is usually dark)
    _, dark_mask = cv2.threshold(gray, 128, 255, cv2.THRESH_BINARY_INV)
    
    # Get colors from dark regions
    dark_pixels = image[dark_mask == 255]
    
    if len(dark_pixels) == 0:
        return "#000000"
    
    # Get dominant color from dark pixels
    pixels = dark_pixels.reshape(-1, 3)
    
    # Convert BGR to RGB
    pixels = pixels[:, ::-1]
    
    # Find most common color
    pixel_tuples = [tuple(p) for p in pixels]
    
    # Get top 5 most common colors
    color_counts = Counter(pixel_tuples)
    top_colors = color_counts.most_common(5)
    
    # Filter out very light colors (likely background bleeding)
    valid_colors = []
    for color, count in top_colors:
        r, g, b = color
        brightness = (r + g + b) / 3
        if brightness < 180:  # Not too light
            valid_colors.append((color, count))
    
    if not valid_colors:
        return "#000000"
    
    # Return most common valid dark color
    dominant_color = valid_colors[0][0]
    r, g, b = dominant_color
    
    # Convert to hex
    hex_color = f"#{r:02x}{g:02x}{b:02x}"
    
    print(f"✅ Detected text color: {hex_color}")
    return hex_color


def analyze_text_properties(template_path):
    """
    Analyze template to extract text properties
    Returns dict with color and suggested fonts
    """
    color = get_dominant_text_color(template_path)
    
    # Suggest common professional fonts
    suggested_fonts = [
        "Arial",
        "Helvetica",
        "Times New Roman",
        "Georgia",
        "Verdana",
        "Roboto",
        "Open Sans"
    ]
    
    return {
        "color": color,
        "suggestedFonts": suggested_fonts,
        "defaultFont": "Arial"
    }
