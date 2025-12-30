# Use Python 3.11 slim image
FROM python:3.11-slim

# Install system dependencies for OpenCV
RUN apt-get update && apt-get install -y \
    libglib2.0-0 \
    libsm6 \
    libxext6 \
    libxrender-dev \
    libgomp1 \
    libgl1-mesa-glx \
    wget \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy requirements first for better caching
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Create models directory
RUN mkdir -p models

# Download models on build (Railway will cache this layer)
RUN python -c "import os; import urllib.request; \
EDSR_URL = 'https://github.com/Saafke/EDSR_Tensorflow/raw/master/models/EDSR_x2.pb'; \
EDSR_PATH = 'models/EDSR_x2.pb'; \
print('Downloading EDSR model...') if not os.path.exists(EDSR_PATH) else None; \
urllib.request.urlretrieve(EDSR_URL, EDSR_PATH) if not os.path.exists(EDSR_PATH) else None; \
print('EDSR model downloaded!') if not os.path.exists(EDSR_PATH) else print('Model already exists')"

# Expose port (Railway will set PORT env variable)
EXPOSE 8001

# Run the application
CMD uvicorn server:app --host 0.0.0.0 --port ${PORT:-8001}
