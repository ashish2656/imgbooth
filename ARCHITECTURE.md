# 🏗️ FrameCraft Auto-Fit Architecture

## System Architecture

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                        FRONTEND (Next.js)                        ┃
┃                     http://localhost:3000                        ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
                                 │
                                 │ User clicks "Auto Fit"
                                 ▼
         ┌───────────────────────────────────────────────┐
         │   components/autofit.jsx (useAutoFit hook)    │
         │                                               │
         │   • Convert URLs to Blobs                     │
         │   • Create FormData                           │
         │   • Send to API                               │
         └───────────────┬───────────────────────────────┘
                         │
                         │ POST with FormData
                         ▼
         ┌───────────────────────────────────────────────┐
         │      app/api/autofit/route.js (Proxy)         │
         │                                               │
         │   • Validate inputs                           │
         │   • Forward to Python backend                 │
         └───────────────┬───────────────────────────────┘
                         │
                         │ HTTP POST
                         ▼
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                    BACKEND (Python FastAPI)                      ┃
┃                     http://localhost:8001                        ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
                         │
                         ▼
         ┌───────────────────────────────────────────────┐
         │           ai/server.py (FastAPI)              │
         │                                               │
         │   • Check cache (MD5 hash)                    │
         │   • If cached → return immediately            │
         │   • If new → run detection                    │
         └───────────────┬───────────────────────────────┘
                         │
                         │ Template not in cache
                         ▼
         ┌───────────────────────────────────────────────┐
         │          ai/autofit.py (Core Logic)           │
         │                                               │
         │   Step 1: Try detect_photo_mask()             │
         │   Step 2: Fallback to detect_photo_box()      │
         │   Step 3: Calculate bounding box              │
         └───────────────┬───────────────────────────────┘
                         │
                ┌────────┴────────┐
                ▼                 ▼
    ┌──────────────────┐  ┌──────────────────┐
    │sam_detect_mask.py│  │sam_detect_box.py │
    │                  │  │                  │
    │ • Load SAM model │  │ • Load SAM model │
    │ • Detect shapes  │  │ • Detect boxes   │
    │ • Score masks    │  │ • Score boxes    │
    └──────────────────┘  └──────────────────┘
                │                 │
                └────────┬────────┘
                         │
                         ▼
         ┌───────────────────────────────────────────────┐
         │         Return JSON Geometry                  │
         │                                               │
         │   {                                           │
         │     "x": 120,                                 │
         │     "y": 80,                                  │
         │     "width": 300,                             │
         │     "height": 420,                            │
         │     "mode": "MASK + FACE"                     │
         │   }                                           │
         └───────────────┬───────────────────────────────┘
                         │
                         │ JSON Response
                         ▼
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                    FRONTEND (Canvas Update)                      ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
                         │
                         ▼
         ┌───────────────────────────────────────────────┐
         │      useAutoFit.applyBoxToImage()             │
         │                                               │
         │   • Calculate scale                           │
         │   • Center image in box                       │
         │   • Preserve rotation                         │
         │   • Update Fabric.js canvas                   │
         └───────────────────────────────────────────────┘
                         │
                         ▼
                    ✨ DONE ✨
```

---

## Data Flow

### Request Flow
```
Template Image (URL) ──┐
                       ├──> Convert to Blobs ──> FormData ──> API ──> Python
User Photo (URL) ──────┘
```

### Response Flow
```
Python Detection ──> JSON Geometry ──> Next.js API ──> useAutoFit ──> Fabric.js
```

---

## Caching Strategy

```
┌─────────────────────────────────────────────────────────────────┐
│                        First Request                            │
└─────────────────────────────────────────────────────────────────┘
    Upload Template → Compute MD5 Hash → Run SAM Detection (3-5s)
                                       → Cache Result
                                       → Return JSON
                                       
┌─────────────────────────────────────────────────────────────────┐
│                      Subsequent Requests                        │
└─────────────────────────────────────────────────────────────────┘
    Upload Template → Compute MD5 Hash → Check Cache → Return JSON (0.1s)
                                               ↑
                                             Cache Hit! ✨
```

---

## Model Loading Strategy

```
┌─────────────────────────────────────────────────────────────────┐
│                      Server Startup                             │
└─────────────────────────────────────────────────────────────────┘
    Start FastAPI → No models loaded (lazy loading)
    
┌─────────────────────────────────────────────────────────────────┐
│                      First API Call                             │
└─────────────────────────────────────────────────────────────────┘
    API Request → Load SAM model (2-3s) → Store in global variable
                                        → Process request
                                        
┌─────────────────────────────────────────────────────────────────┐
│                      All Subsequent Calls                       │
└─────────────────────────────────────────────────────────────────┘
    API Request → Use cached SAM model → Process immediately
```

---

## Component Hierarchy

```
app/
├── layout.jsx
├── page.jsx (Home)
└── editor/
    └── page.jsx
        ├── EditorProvider (Context)
        │   ├── CanvasArea (Fabric.js)
        │   │   └── Canvas Element
        │   └── Sidebar
        │       └── Auto Fit Panel
        │           └── Button (useAutoFit hook)
        │
        └── State:
            ├── fabricCanvas
            ├── fabricImage
            ├── template
            └── userPhoto
```

---

## API Endpoints

### Next.js (Frontend)
```
POST /api/autofit
├── Input: FormData { template: Blob, photo: Blob }
└── Output: JSON { x, y, width, height, mode }
```

### Python (Backend)
```
POST http://localhost:8001/autofit
├── Input: FormData { template: File, photo: File }
└── Output: JSON { x, y, width, height, mode }

GET http://localhost:8001/health
└── Output: JSON { status: "ok", cached_templates: N }
```

---

## File Structure

```
ImgBooth/
│
├── ai/                           # Python Backend
│   ├── server.py                 # FastAPI app with caching
│   ├── autofit.py                # Core detection logic
│   ├── sam_detect_mask.py        # SAM mask detection
│   ├── sam_detect_box.py         # SAM box detection
│   ├── face_processor.py         # Face detection & cropping
│   └── models/
│       ├── sam_vit_b.pth         # SAM weights
│       └── EDSR_x2.pb            # Super-resolution
│
├── app/
│   └── api/
│       └── autofit/
│           └── route.js          # Next.js API proxy
│
├── components/
│   ├── autofit.jsx               # useAutoFit hook
│   ├── canvas-area.jsx           # Fabric.js canvas
│   └── sidebar.jsx               # UI controls
│
├── contexts/
│   └── editor-context.jsx        # Global state
│
├── AUTOFIT_IMPLEMENTATION.md     # Technical docs
├── IMPLEMENTATION_SUMMARY.md     # Quick reference
└── start-autofit.sh              # Startup script
```

---

## Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **Fabric.js** - Canvas manipulation
- **React Context** - State management
- **Tailwind CSS** - Styling

### Backend
- **FastAPI** - High-performance Python web framework
- **SAM (Segment Anything)** - Meta's segmentation model
- **MediaPipe** - Google's face detection
- **OpenCV** - Image processing
- **EDSR** - Super-resolution enhancement

### Communication
- **FormData** - Multipart file upload
- **JSON** - Lightweight geometry transfer
- **HTTP** - RESTful API

---

## Performance Characteristics

### First Request (Cold Start)
```
User Click
    ↓ 50ms (URL → Blob conversion)
    ↓ 100ms (Next.js API)
    ↓ 2000ms (SAM model loading)
    ↓ 1500ms (Template detection)
    ↓ 100ms (JSON transfer)
    ↓ 50ms (Canvas update)
────────────────────────────
Total: ~3.8 seconds
```

### Subsequent Requests (Cached)
```
User Click
    ↓ 50ms (URL → Blob conversion)
    ↓ 100ms (Next.js API)
    ↓ 10ms (Cache lookup)
    ↓ 100ms (JSON transfer)
    ↓ 50ms (Canvas update)
────────────────────────────
Total: ~0.3 seconds ⚡
```

---

## Security Model

```
┌──────────────────────────────────────────────────────────┐
│                    Security Layers                       │
└──────────────────────────────────────────────────────────┘

1. CORS Policy
   ├── Development: Allow localhost:3000
   └── Production: Restrict to your domain

2. File Validation
   ├── Check file types (images only)
   └── Validate file sizes

3. Temporary Storage
   ├── Save to temp directory
   └── Auto-delete after processing

4. No Persistence
   ├── No images stored on server
   ├── No user tracking
   └── Cache stores only geometry (not images)

5. Local Processing
   ├── No external API calls
   ├── No data leaves your server
   └── Complete privacy
```

---

## Deployment Architecture

### Development
```
┌──────────────┐         ┌──────────────┐
│   Next.js    │ ◄────► │   FastAPI    │
│ localhost:   │         │ localhost:   │
│    3000      │         │    8001      │
└──────────────┘         └──────────────┘
```

### Production (Recommended)
```
┌──────────────┐         ┌──────────────┐
│   Vercel     │ ◄────► │   Railway    │
│   (Frontend) │         │  (Backend)   │
└──────────────┘         └──────────────┘
        │                       │
        │                       │
        ▼                       ▼
    ┌────────────────────────────┐
    │      CDN (Templates)       │
    └────────────────────────────┘
```

---

## Error Handling Flow

```
User Action
    │
    ├─► Canvas not ready ──> Show error message
    │
    ├─► No template ──> Disable button
    │
    ├─► No photo ──> Disable button
    │
    ├─► API timeout ──> Retry with exponential backoff
    │
    ├─► Detection failed ──> Show "No placeholder found"
    │
    └─► Network error ──> Show "Check backend status"
```

---

This architecture ensures:
- ✅ Fast performance with smart caching
- ✅ Scalable design (models load once, serve many)
- ✅ Clean separation of concerns
- ✅ Easy debugging with clear data flow
- ✅ Production-ready error handling
