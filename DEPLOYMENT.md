# Deployment Guide for Render

This guide will help you deploy both the backend and frontend of your portfolio website to Render.

## Prerequisites

1. A GitHub account with your code pushed to: `https://github.com/himanshu-ladha8/Portfolio-Website`
2. A Render account (sign up at https://dashboard.render.com/)
3. A MongoDB database (MongoDB Atlas recommended for free tier)

## Step 1: Set Up MongoDB Database

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a free cluster
2. Create a database user and get your connection string
3. Your connection string will look like: `mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority`

## Step 2: Deploy Backend Service

1. **Go to Render Dashboard**: https://dashboard.render.com/
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository: `himanshu-ladha8/Portfolio-Website`
4. Configure the service:
   - **Name**: `portfolio-backend`
   - **Environment**: `Node`
   - **Build Command**: `cd Backend && npm install`
   - **Start Command**: `cd Backend && npm start`
   - **Plan**: Free (or choose a paid plan)
5. **Add Environment Variables**:
   - `NODE_ENV` = `production`
   - `PORT` = `10000` (Render automatically assigns a port, but this is a fallback)
   - `MONGODB_URI` = Your MongoDB connection string from Step 1
6. Click **"Create Web Service"**
7. Wait for the deployment to complete
8. **Copy your backend URL** (e.g., `https://portfolio-backend.onrender.com`)

## Step 3: Deploy Frontend Service

1. In Render Dashboard, click **"New +"** → **"Static Site"**
2. Connect the same GitHub repository: `himanshu-ladha8/Portfolio-Website`
3. Configure the service:
   - **Name**: `portfolio-frontend`
   - **Build Command**: `cd Frontend/app1 && npm install && npm run build`
   - **Publish Directory**: `Frontend/app1/build`
4. **Add Environment Variables**:
   - `REACT_APP_API_URL` = Your backend URL from Step 2 (e.g., `https://portfolio-backend.onrender.com`)
   - **Important**: Do NOT include a trailing slash
5. Click **"Create Static Site"**
6. Wait for the deployment to complete
7. Your frontend will be available at a URL like: `https://portfolio-frontend.onrender.com`

## Step 4: Update Backend CORS (if needed)

If you encounter CORS errors, update `Backend/server.js` to allow your frontend domain:

```javascript
app.use(cors({
  origin: ['https://portfolio-frontend.onrender.com', 'http://localhost:3000'],
  credentials: true
}));
```

## Alternative: Using render.yaml (Blueprints)

If you prefer to use the `render.yaml` file:

1. Go to Render Dashboard → **"New +"** → **"Blueprint"**
2. Connect your GitHub repository
3. Render will automatically detect `render.yaml` and create both services
4. You'll still need to set the environment variables in the Render dashboard:
   - `MONGODB_URI` for backend
   - `REACT_APP_API_URL` for frontend (set this after backend is deployed)

## Environment Variables Summary

### Backend Service
- `NODE_ENV` = `production`
- `PORT` = `10000`
- `MONGODB_URI` = Your MongoDB Atlas connection string

### Frontend Service
- `REACT_APP_API_URL` = Your backend service URL (e.g., `https://portfolio-backend.onrender.com`)

## Troubleshooting

### Backend Issues
- **MongoDB Connection Error**: Verify your `MONGODB_URI` is correct and your IP is whitelisted in MongoDB Atlas
- **Port Error**: Render automatically sets the PORT environment variable, so your code should use `process.env.PORT`

### Frontend Issues
- **API Calls Failing**: Ensure `REACT_APP_API_URL` is set correctly and matches your backend URL
- **Build Fails**: Check that all dependencies are in `package.json` and the build command is correct
- **404 Errors**: Ensure the publish directory is set to `Frontend/app1/build`

### CORS Issues
- Update the CORS configuration in `Backend/server.js` to include your frontend URL

## Notes

- Free tier services on Render may spin down after 15 minutes of inactivity
- The first request after spin-down may take 30-60 seconds
- Consider upgrading to a paid plan for always-on services
- Both services will auto-deploy when you push changes to your main branch

## Testing Your Deployment

1. Visit your frontend URL
2. Try submitting the contact form
3. Check the backend logs in Render dashboard to see if the request was received
4. Verify the message was saved in your MongoDB database

