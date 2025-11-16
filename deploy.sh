#!/bin/bash

# WayUP Technology Deployment Script
SERVER_IP="162.0.233.208"
SERVER_USER="root"

echo "================================"
echo "  WayUP Technology Deployment"
echo "================================"
echo "🚀 Deploying Frontend..."

# Build React app
echo "📦 Building React application..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed!"
    exit 1
fi

# Upload to server
echo "📤 Uploading files to server..."
scp -r build/* "$SERVER_USER@$SERVER_IP:/var/www/wayuptechn.com/"

if [ $? -eq 0 ]; then
    echo "✅ Frontend files uploaded successfully!"
else
    echo "❌ Upload failed!"
    exit 1
fi

# Reload nginx
echo "🔄 Reloading Nginx..."
ssh "$SERVER_USER@$SERVER_IP" "systemctl reload nginx"

echo "🎉 Frontend deployment complete!"
echo "💡 Clear browser cache or use incognito mode to see changes"
