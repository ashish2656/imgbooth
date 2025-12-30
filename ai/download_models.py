"""
Download AI models for the application.
This script is run during deployment to fetch models that are too large for git.
"""
import os
import urllib.request
from pathlib import Path

# Create models directory
MODELS_DIR = Path(__file__).parent / "models"
MODELS_DIR.mkdir(exist_ok=True)

def download_file(url: str, destination: str):
    """Download a file with progress indication."""
    if os.path.exists(destination):
        print(f"✓ {destination} already exists, skipping download.")
        return
    
    print(f"⬇️  Downloading {destination}...")
    try:
        urllib.request.urlretrieve(url, destination)
        size_mb = os.path.getsize(destination) / (1024 * 1024)
        print(f"✓ Downloaded {destination} ({size_mb:.1f} MB)")
    except Exception as e:
        print(f"✗ Failed to download {destination}: {e}")
        raise

# Model URLs
MODELS = {
    "EDSR_x2.pb": "https://github.com/Saafke/EDSR_Tensorflow/raw/master/models/EDSR_x2.pb",
    # SAM model is optional - only download if needed (358 MB)
    # "sam_vit_b.pth": "https://dl.fbaipublicfiles.com/segment_anything/sam_vit_b_01ec64.pth",
}

if __name__ == "__main__":
    print("🤖 Downloading AI models...")
    
    for filename, url in MODELS.items():
        destination = MODELS_DIR / filename
        download_file(url, str(destination))
    
    print("\n✅ All models downloaded successfully!")
    print(f"📁 Models location: {MODELS_DIR}")
