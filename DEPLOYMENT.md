# 🚀 ImgBooth - Deployment Guide

## Project Structure
- **Frontend**: Next.js (Deploy on Vercel)
- **Backend**: Python FastAPI (Deploy on Railway)
- **Models**: Auto-downloaded during deployment

---

## 📋 Prerequisites

1. GitHub account with code pushed
2. Vercel account (free)
3. Railway account (Hobby plan recommended - $5/month)

---

## 🎯 Step-by-Step Deployment

### **Step 1: Deploy Backend on Railway**

1. **Go to Railway**: https://railway.app
2. **Sign in with GitHub**
3. Click **"New Project"**
4. Select **"Deploy from GitHub repo"**
5. Choose `ashish2656/imgbooth`
6. **Configure Service**:
   - Click on the deployed service
   - Go to **Settings** → **Root Directory**
   - Set to: `ai`
   - Railway will detect the Dockerfile automatically

7. **Wait for Build** (2-3 minutes)
   - Models will be downloaded during build
   - Check logs to ensure EDSR model downloaded

8. **Get Your Backend URL**:
   - Go to **Settings** → **Networking**
   - Click **"Generate Domain"**
   - Copy the URL (e.g., `https://imgbooth-production-xxxx.up.railway.app`)

---

### **Step 2: Deploy Frontend on Vercel**

1. **Go to Vercel**: https://vercel.com
2. **Sign in with GitHub**
3. Click **"Add New..."** → **"Project"**
4. **Import Repository**:
   - Find `ashish2656/imgbooth`
   - Click **"Import"**

5. **Configure Project**:
   - Framework: **Next.js** (auto-detected)
   - Root Directory: **Leave empty** (project root)
   - Build Command: `pnpm build` (auto-detected)
   - Output Directory: `.next` (auto-detected)

6. **Add Environment Variable**:
   - Click **"Environment Variables"**
   - Add:
     ```
     Name: NEXT_PUBLIC_AI_API_URL
     Value: https://your-railway-url.up.railway.app
     ```
     (Paste your Railway URL from Step 1)

7. **Click "Deploy"** (2-3 minutes)

---

### **Step 3: Test Your Deployment**

1. **Open Your Vercel URL** (e.g., `https://imgbooth.vercel.app`)
2. **Test Features**:
   - Upload a photo with a face
   - Try the AutoFit feature
   - Check if face detection works

---

## 🔧 Troubleshooting

### Backend Issues

**Check Railway Logs**:
- Go to Railway → Your Project → Deployments → View Logs

**Common Issues**:
- ❌ **Model download failed**: Check internet connectivity
- ❌ **Port binding error**: Railway auto-sets PORT variable
- ❌ **Memory exceeded**: Upgrade to Hobby plan ($5/month)

### Frontend Issues

**Check Vercel Logs**:
- Go to Vercel → Your Project → Deployments → View Function Logs

**Common Issues**:
- ❌ **API not connecting**: Verify `NEXT_PUBLIC_AI_API_URL` is correct
- ❌ **CORS error**: Backend CORS is already configured for all origins
- ❌ **Build failed**: Check if all dependencies in package.json

---

## 💰 Cost Breakdown

| Service | Plan | Cost | What You Get |
|---------|------|------|--------------|
| **Vercel** | Hobby | **FREE** | 100 GB bandwidth, unlimited deploys |
| **Railway** | Hobby | **$5/month** | 8 GB RAM, $5 credit included |
| **Total** | | **$5/month** | Full production deployment |

---

## 🔄 Updating Your App

### Update Frontend
```bash
git add .
git commit -m "Update frontend"
git push origin main
```
Vercel will auto-deploy in ~2 minutes

### Update Backend
```bash
git add .
git commit -m "Update backend"
git push origin main
```
Railway will auto-deploy in ~3 minutes

---

## ✅ Verification Checklist

- [ ] Railway service is running (check logs)
- [ ] Railway domain is generated and accessible
- [ ] Vercel site is deployed successfully
- [ ] Environment variable `NEXT_PUBLIC_AI_API_URL` is set correctly
- [ ] Can upload images on frontend
- [ ] Face detection works (test with a photo)
- [ ] No CORS errors in browser console

---

## 🆘 Need Help?

- **Railway Logs**: Railway Dashboard → Deployments → Logs
- **Vercel Logs**: Vercel Dashboard → Deployments → Function Logs
- **Browser Console**: F12 → Console tab

---

**Your app should now be live! 🎉**
- Frontend: `https://your-project.vercel.app`
- Backend: `https://your-project.up.railway.app`
