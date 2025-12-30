from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, StreamingResponse
import tempfile
import shutil
import os
import hashlib
from pathlib import Path
import cv2
import io

from autofit import run_autofit
from face_processor import process_face, detect_face_box
from text_analyzer import analyze_text_properties

app = FastAPI()

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Cache for template detection results
# Key: template file hash, Value: detection result
template_cache = {}

def get_file_hash(file_path: str) -> str:
    """Generate MD5 hash of a file for caching"""
    hash_md5 = hashlib.md5()
    with open(file_path, "rb") as f:
        for chunk in iter(lambda: f.read(4096), b""):
            hash_md5.update(chunk)
    return hash_md5.hexdigest()


@app.on_event("startup")
async def startup_event():
    """Pre-load SAM models on server startup"""
    print("🚀 FastAPI server starting...")
    print("📦 SAM models will be loaded on first request (lazy loading)")
    print("✅ Server ready")


@app.post("/autofit")
async def autofit(
    template: UploadFile = File(...),
    photo: UploadFile = File(...)
):
    """
    Auto-fit endpoint: detects photo placeholder in template.
    
    Args:
        template: Template image file
        photo: User photo file
    
    Returns:
        JSON: {
            "x": int,
            "y": int,
            "width": int,
            "height": int,
            "mode": str
        }
    """
    try:
        with tempfile.TemporaryDirectory() as tmp:
            # Save uploaded files
            template_path = os.path.join(tmp, "template.png")
            photo_path = os.path.join(tmp, "photo.png")

            with open(template_path, "wb") as f:
                shutil.copyfileobj(template.file, f)

            with open(photo_path, "wb") as f:
                shutil.copyfileobj(photo.file, f)

            # Check cache for template
            template_hash = get_file_hash(template_path)
            
            if template_hash in template_cache:
                print(f"✨ Cache hit for template {template_hash[:8]}...")
                result = template_cache[template_hash]
            else:
                print(f"🔍 Processing new template {template_hash[:8]}...")
                result = run_autofit(template_path, photo_path)
                template_cache[template_hash] = result

            return JSONResponse(content=result)

    except Exception as e:
        print(f"❌ Error in autofit: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/enhance")
async def enhance_photo(
    photo: UploadFile = File(...),
    width: int = 400,
    height: int = 400
):
    """
    AI Enhancement endpoint: detects face, crops, and enhances photo.
    
    Args:
        photo: User photo file
        width: Target width (optional)
        height: Target height (optional)
    
    Returns:
        Enhanced image as PNG
    """
    try:
        with tempfile.TemporaryDirectory() as tmp:
            # Save uploaded file
            photo_path = os.path.join(tmp, "photo.png")
            with open(photo_path, "wb") as f:
                shutil.copyfileobj(photo.file, f)

            # Process face with AI enhancement
            enhanced_img = process_face(photo_path, width, height)
            
            # Convert to PNG bytes
            _, buffer = cv2.imencode('.png', enhanced_img)
            io_buf = io.BytesIO(buffer)
            
            return StreamingResponse(io_buf, media_type="image/png")

    except Exception as e:
        print(f"❌ Error in enhance: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/analyze-text")
async def analyze_text(
    template: UploadFile = File(...)
):
    """
    Analyze template to detect text color and font suggestions
    
    Args:
        template: Template image file
    
    Returns:
        JSON: {
            "color": str (hex color),
            "suggestedFonts": list of font names,
            "defaultFont": str
        }
    """
    try:
        with tempfile.TemporaryDirectory() as tmp:
            # Save uploaded file
            template_path = os.path.join(tmp, "template.png")
            with open(template_path, "wb") as f:
                shutil.copyfileobj(template.file, f)

            # Analyze text properties
            result = analyze_text_properties(template_path)
            
            return JSONResponse(content=result)

    except Exception as e:
        print(f"❌ Error in analyze-text: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "ok", "cached_templates": len(template_cache)}