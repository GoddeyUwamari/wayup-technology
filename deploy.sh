

echo "================================"
echo "  WayUP Technology Deployment"
echo "================================"

# Configuration
SERVER="root@162.0.233.208"
PORT="2847"
REMOTE_PATH="/var/www/wayuptechn.com"
BACKUP_PATH="/var/www/wayuptechn.com_backup_$(date +%Y%m%d_%H%M%S)"

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "🚀 Starting Frontend Deployment..."
echo ""

# Step 1: Build the React application
echo "📦 Building React application..."
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build successful!${NC}"
echo ""

# Step 2: Create backup on server
echo "💾 Creating backup on server..."
ssh -p $PORT $SERVER "cp -r $REMOTE_PATH $BACKUP_PATH" 2>/dev/null

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Backup created: $BACKUP_PATH${NC}"
else
    echo -e "${YELLOW}⚠️  Backup creation skipped or failed${NC}"
fi
echo ""

# Step 3: Upload files to server
echo "📤 Uploading files to server..."
scp -P $PORT -r build/* $SERVER:$REMOTE_PATH/

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Upload failed!${NC}"
    echo "Attempting to restore backup..."
    ssh -p $PORT $SERVER "rm -rf $REMOTE_PATH/* && cp -r $BACKUP_PATH/* $REMOTE_PATH/"
    exit 1
fi

echo -e "${GREEN}✅ Upload successful!${NC}"
echo ""

# Step 4: Set proper permissions
echo "🔐 Setting proper permissions..."
ssh -p $PORT $SERVER "chown -R nginx:nginx $REMOTE_PATH && chmod -R 755 $REMOTE_PATH"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Permissions set${NC}"
else
    echo -e "${YELLOW}⚠️  Permission setting failed${NC}"
fi
echo ""

# Step 5: Restart Nginx
echo "🔄 Restarting Nginx..."
ssh -p $PORT $SERVER "systemctl restart nginx"

if [ $? -ne 0 ]; then
    echo -e "${YELLOW}⚠️  Nginx restart failed, but files are uploaded${NC}"
else
    echo -e "${GREEN}✅ Nginx restarted successfully!${NC}"
fi
echo ""

# Step 6: Verify deployment
echo "🔍 Verifying deployment..."
HTTP_STATUS=$(curl -o /dev/null -s -w "%{http_code}" https://wayuptechn.com)

if [ "$HTTP_STATUS" == "200" ]; then
    echo -e "${GREEN}✅ Website is responding correctly (HTTP $HTTP_STATUS)${NC}"
else
    echo -e "${YELLOW}⚠️  Website returned HTTP $HTTP_STATUS${NC}"
fi
echo ""

# Step 7: Cleanup old backups (keep last 5)
echo "🧹 Cleaning up old backups..."
ssh -p $PORT $SERVER "cd /var/www && ls -dt wayuptechn.com_backup_* 2>/dev/null | tail -n +6 | xargs rm -rf" 2>/dev/null

echo ""
echo "================================"
echo -e "${GREEN}✅ Deployment Complete!${NC}"
echo "================================"
echo "�� Website: https://wayuptechn.com"
echo "📦 Backup: $BACKUP_PATH"
echo "📊 Build size: $(du -sh build | cut -f1)"
echo ""
echo "To rollback, run:"
echo "ssh -p $PORT $SERVER \"rm -rf $REMOTE_PATH/* && cp -r $BACKUP_PATH/* $REMOTE_PATH/\""
echo ""
