# Use Python 3.11 slim image
FROM python:3.11-slim

# Install system dependencies for OpenCV
RUN apt-get update && apt-get install -y --no-install-recommends \
    libglib2.0-0 \
    libsm6 \
    libxext6 \
    libxrender-dev \
    libgomp1 \
    libgl1 \
    wget \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy requirements first for better caching
COPY ai/requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY ai/ .

# Create models directory
RUN mkdir -p models

# Expose port (Railway will set PORT env variable)
EXPOSE 8001

# Download model at startup and run the application
CMD python download_models.py && uvicorn server:app --host 0.0.0.0 --port ${PORT:-8001}
