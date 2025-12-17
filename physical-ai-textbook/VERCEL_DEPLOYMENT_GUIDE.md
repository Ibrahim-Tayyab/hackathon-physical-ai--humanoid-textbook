# Physical AI Chatbot - Vercel Deployment Guide

## Overview
This guide explains how to properly deploy the Physical AI Chatbot to Vercel with the FastAPI backend.

## Prerequisites
- Vercel account (https://vercel.com)
- GitHub/GitLab/Bitbucket repository with the code
- Required API keys (see below)

## Required Environment Variables

Add these to your Vercel project settings at: **Settings → Environment Variables**

### 1. **Qdrant Vector Database**
```
QDRANT_URL=https://[your-instance].europe-west3-0.gcp.cloud.qdrant.io:6333
QDRANT_API_KEY=[your-api-key]
```

### 2. **Cohere Embeddings API**
```
COHERE_API_KEY=[your-cohere-api-key]
```

### 3. **Google Gemini API**
```
GOOGLE_API_KEY=[your-google-api-key]
```

### 4. **Model Configuration (Optional)**
```
MODEL_NAME=gemini-1.5-flash-latest
COLLECTION_NAME=physical_ai_book
LOG_LEVEL=INFO
```

## How to Set Environment Variables on Vercel

1. Go to your Vercel Dashboard
2. Select your project "physical-ai-textbook"
3. Click **Settings** → **Environment Variables**
4. For each variable above, click **Add New** and enter:
   - **Name**: (e.g., `QDRANT_URL`)
   - **Value**: (the actual value)
   - **Environments**: Select `Production`, `Preview`, and `Development`
5. Click **Save**

## Deployment Steps

### Option 1: Deploy from Git (Recommended)
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to https://vercel.com/new
3. Import the repository
4. Select the correct root directory: `physical-ai-textbook/`
5. Click **Deploy**
6. Wait for deployment to complete
7. Set environment variables in Vercel Dashboard (as described above)
8. Redeploy after setting environment variables

### Option 2: Manual Deployment with Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to project
cd physical-ai-textbook

# Deploy
vercel --prod

# Follow prompts to configure project
```

## API Endpoints

Once deployed, your API endpoints will be:
- **Health Check**: `https://your-domain.vercel.app/api/health`
- **Chat**: `https://your-domain.vercel.app/api/chat`

## How It Works

### Architecture
```
Frontend (React/Docusaurus) 
    ↓
    /api/health   → api/health/handler.py   → Returns status
    /api/chat     → api/chat/handler.py     → Mangum wrapper
    ↓
    FastAPI app (index.py)
    ├── RAG Engine
    ├── Qdrant (Vector DB)
    ├── Cohere (Embeddings)
    └── Google Gemini (LLM)
```

### Request Flow
1. **Frontend sends message** to `/api/chat` endpoint
2. **Vercel receives request** → Routes to `api/chat/handler.py`
3. **Handler.py wraps FastAPI** with Mangum for serverless
4. **FastAPI processes**:
   - Embeds query with Cohere
   - Retrieves relevant docs from Qdrant
   - Calls Google Gemini for response
   - Returns answer + sources
5. **Response sent back** to frontend

## Troubleshooting

### Problem: 404 Error
**Solution**: Ensure environment variables are set in Vercel Dashboard. Redeploy after setting them.

### Problem: Backend Returns Empty Response
**Solution**: Check that all required API keys are correct in Vercel environment variables.

### Problem: CORS Errors
**Solution**: Already configured in FastAPI with `allow_origins=["*"]`. Should work in production.

### Problem: Cold Start Takes Too Long
**Solution**: This is normal for serverless functions. Subsequent requests are faster.

## Local Development

### Run Locally (Development)
```bash
cd physical-ai-textbook

# Install dependencies
pip install -r requirements.txt

# Create .env file with your API keys
# (Copy chatbot/.env or create new one in project root)

# Start FastAPI backend
cd chatbot
python api.py
# or
uvicorn api:app --reload

# In another terminal, start frontend
npm start
```

### Access Locally
- Frontend: http://localhost:3000
- Backend: http://localhost:8000
- Backend health: http://localhost:8000/health
- Chat endpoint: http://localhost:8000/chat (POST)

## Important Files

| File | Purpose |
|------|---------|
| `api/index.py` | Main FastAPI application |
| `api/chat/handler.py` | Vercel serverless handler for chat |
| `api/health/handler.py` | Vercel serverless handler for health checks |
| `vercel.json` | Vercel configuration & routing |
| `requirements.txt` | Python dependencies |
| `src/components/ChatAssistant.tsx` | Frontend chat component |

## Monitoring & Logs

### View Deployment Logs
1. Go to Vercel Dashboard
2. Select "physical-ai-textbook" project
3. Click **Deployments**
4. Click on the latest deployment
5. Click **Functions** to see API logs

### Enable Debug Logging
Set in Vercel Environment Variables:
```
LOG_LEVEL=DEBUG
```

## Performance Tips

1. **Reduce model size**: Use `gemini-1.5-flash` (lighter) instead of `gemini-1.5-pro`
2. **Optimize vector DB**: Use appropriate `TOP_K_RESULTS` (default: 5)
3. **Cache responses**: Frontend caches conversation history
4. **Monitor cold starts**: Vercel free tier has limitations; consider Pro for better performance

## Costs

- **Vercel**: Free tier includes ~65 serverless function invocations/day
- **Qdrant**: $20-200/month depending on usage
- **Cohere**: Free tier (100k requests/month) or $0.00015 per request
- **Google Gemini**: Free tier (60 requests/minute) available

## Next Steps

1. ✅ Set up Vercel account
2. ✅ Add all environment variables
3. ✅ Deploy via Git
4. ✅ Test endpoints with cURL or Postman
5. ✅ Monitor logs in Vercel Dashboard

## Support

For issues:
1. Check Vercel logs (Deployments → Functions)
2. Verify all environment variables are set correctly
3. Test local development first
4. Check Python dependency versions in requirements.txt
