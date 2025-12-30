# 🚀 Quick Deployment Commands

## ✅ What's Ready
- ✓ Code pushed to GitHub
- ✓ Models excluded from git (will download during deployment)
- ✓ Virtual environment excluded from git
- ✓ Dockerfile created for Railway
- ✓ Vercel config created

---

## 🎯 Deploy Now - Step by Step

### **1️⃣ Deploy Backend (Railway) - 5 minutes**

```bash
# Go to: https://railway.app
# 1. Click "New Project"
# 2. Choose "Deploy from GitHub repo"
# 3. Select: ashish2656/imgbooth
# 4. Railway auto-detects Dockerfile in /ai folder
# 5. Wait for build (models download automatically)
# 6. Generate domain: Settings → Networking → Generate Domain
# 7. Copy URL: https://imgbooth-production-xxxx.up.railway.app
```

**Railway Settings to Configure:**
- Root Directory: `ai`
- Plan: Hobby ($5/month for 8GB RAM) ⚠️ Free tier has only 512MB

---

### **2️⃣ Deploy Frontend (Vercel) - 3 minutes**

```bash
# Go to: https://vercel.com
# 1. Click "Add New..." → "Project"
# 2. Import: ashish2656/imgbooth
# 3. Configure:
#    - Framework: Next.js (auto-detected)
#    - Root Directory: (leave empty)
#    - Build Command: pnpm build
# 4. Add Environment Variable:
#    Name: NEXT_PUBLIC_AI_API_URL
#    Value: <paste Railway URL from step 1>
# 5. Click Deploy
```

---

## 🧪 Test Your Deployment

1. Open Vercel URL: `https://imgbooth-xxx.vercel.app`
2. Upload a photo with a face
3. Try AutoFit feature
4. Check browser console (F12) for any errors

---

## 🔍 Check Deployment Status

### Railway Backend Status:
```bash
# Open Railway Dashboard → Your Project → Deployments → View Logs
# Look for:
✓ "✅ Using OpenCV face detector"
✓ "Application startup complete"
✓ "Uvicorn running on http://0.0.0.0:8001"
```

### Vercel Frontend Status:
```bash
# Open Vercel Dashboard → Your Project → Deployments
# Should show: ✓ Ready
```

---

## 📱 Your Live URLs

After deployment, you'll have:

- **Frontend**: `https://imgbooth-[your-username].vercel.app`
- **Backend**: `https://imgbooth-production-[random].up.railway.app`

---

## 🔄 Future Updates

```bash
# Make changes, then:
git add .
git commit -m "Your update message"
git push origin main

# Auto-deploys:
# - Vercel: ~2 minutes
# - Railway: ~3 minutes
```

---

## ⚠️ Important Notes

1. **Models are downloaded automatically** during Railway deployment
2. **No need to push models** - they're in .gitignore
3. **Virtual environment excluded** - Railway creates its own
4. **First deployment takes longer** - models need to download (3-5 min)
5. **Railway free trial expires** - upgrade to Hobby plan for production

---

## 💰 Monthly Cost

- Vercel (Frontend): **FREE**
- Railway (Backend): **$5/month** (Hobby plan)
- **Total: $5/month**

---

## ✅ Pre-Deployment Checklist

- [x] Code pushed to GitHub
- [x] Models excluded from git
- [x] Virtual env excluded from git
- [x] Dockerfile created
- [x] .dockerignore created
- [x] vercel.json created
- [x] Environment variables documented

**You're ready to deploy! 🎉**

Start with Railway (step 1), then Vercel (step 2).
