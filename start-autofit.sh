#!/bin/bash

# FrameCraft Auto-Fit - Quick Start Script

echo "🚀 Starting FrameCraft Auto-Fit Integration..."
echo ""

# Check if in correct directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the ImgBooth root directory"
    exit 1
fi

# Start Python Backend
echo "📦 Starting Python FastAPI Backend..."
cd ai

# Check for required packages
if ! python3 -c "import fastapi" 2>/dev/null; then
    echo "⚠️  FastAPI not found. Installing dependencies..."
    pip3 install fastapi uvicorn python-multipart
fi

if ! python3 -c "import cv2" 2>/dev/null; then
    echo "⚠️  OpenCV not found. Installing..."
    pip3 install opencv-python
fi

# Start the backend in background
echo "🔧 Launching FastAPI server on http://localhost:8001..."
python3 -m uvicorn server:app --host 0.0.0.0 --port 8001 &
PYTHON_PID=$!

cd ..

# Wait for backend to start
echo "⏳ Waiting for backend to initialize..."
sleep 2

# Check if backend is running
if curl -s http://localhost:8001/health > /dev/null 2>&1; then
    echo "✅ Python Backend is running!"
else
    echo "⚠️  Backend might still be starting. Check http://localhost:8001/health"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✨ Auto-Fit Integration Ready!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📝 Next Steps:"
echo "   1. Make sure Next.js is running: npm run dev"
echo "   2. Open http://localhost:3000"
echo "   3. Upload template + photo"
echo "   4. Click 'Auto Fit (AI)' button"
echo ""
echo "🔗 Endpoints:"
echo "   Frontend: http://localhost:3000"
echo "   Backend:  http://localhost:8001"
echo "   Health:   http://localhost:8001/health"
echo ""
echo "📄 Documentation: AUTOFIT_IMPLEMENTATION.md"
echo ""
echo "Press Ctrl+C to stop backend (PID: $PYTHON_PID)"
echo ""

# Wait for user interrupt
wait $PYTHON_PID
