# Production Deployment Guide for online.metaweb.ge

## Prerequisites Checklist

### 1. DNS Configuration
- [ ] CNAME record: `online.metaweb.ge` → `metaweb.ge`
- [ ] DNS propagation complete (test with `nslookup online.metaweb.ge`)
- [ ] Domain points to your server's IP address

### 2. Server Requirements
- [ ] Ubuntu/Debian Linux server
- [ ] Port 80 and 443 open in firewall
- [ ] Root/sudo access
- [ ] Domain email address for Let's Encrypt notifications

## Quick Setup Commands

### Option 1: Automated Script (Recommended)
```bash
# Download and run the setup script
wget https://your-server.com/setup-ssl.sh
chmod +x setup-ssl.sh
./setup-ssl.sh
```

### Option 2: Manual Commands
```bash
# 1. Install packages
sudo apt update
sudo apt install nginx certbot python3-certbot-nginx

# 2. Create nginx config (use the config from setup-ssl.sh)
sudo nano /etc/nginx/sites-available/online.metaweb.ge

# 3. Enable site
sudo ln -s /etc/nginx/sites-available/online.metaweb.ge /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# 4. Get SSL certificate
sudo certbot --nginx -d online.metaweb.ge

# 5. Test auto-renewal
sudo certbot renew --dry-run
```

## Deploy Your Application

### 1. Upload Your Code
```bash
# Clone your repository
git clone https://github.com/your-username/metaweb.git
cd metaweb

# Install dependencies
npm install
npm run build
```

### 2. Start with PM2 (Production Process Manager)
```bash
# Install PM2 globally
sudo npm install -g pm2

# Start your application
pm2 start server/index.js --name metaweb-app

# Enable auto-start on server reboot
pm2 startup
pm2 save
```

### 3. Environment Variables
```bash
# Create production environment file
sudo tee /var/www/metaweb/.env << EOF
NODE_ENV=production
PORT=5000
DATABASE_URL=your-database-url
EOF
```

## Testing Your SSL Setup

### 1. Basic Tests
```bash
# Test SSL certificate
curl -I https://online.metaweb.ge

# Test subdomain response
curl https://online.metaweb.ge

# Check SSL rating
# Visit: https://www.ssllabs.com/ssltest/analyze.html?d=online.metaweb.ge
```

### 2. Browser Tests
- Visit `https://online.metaweb.ge`
- Verify green lock icon appears
- Check certificate details (should show Let's Encrypt)
- Test on mobile devices

## Monitoring and Maintenance

### 1. SSL Certificate Monitoring
```bash
# Check certificate expiration
sudo certbot certificates

# Manual renewal (if needed)
sudo certbot renew

# Check renewal cron job
crontab -l | grep certbot
```

### 2. Application Monitoring
```bash
# Check PM2 status
pm2 status

# View application logs
pm2 logs metaweb-app

# Restart application
pm2 restart metaweb-app
```

### 3. Nginx Monitoring
```bash
# Check nginx status
sudo systemctl status nginx

# View nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Reload nginx configuration
sudo nginx -t && sudo systemctl reload nginx
```

## Troubleshooting

### SSL Issues
- **Certificate not working**: Check DNS propagation
- **Connection refused**: Verify firewall ports 80/443 are open
- **Certificate expired**: Run `sudo certbot renew`

### Application Issues
- **502 Bad Gateway**: Check if Node.js app is running on port 5000
- **Static files not loading**: Verify nginx static file configuration
- **Slow response**: Check PM2 logs for errors

### DNS Issues
- **Domain not resolving**: Verify CNAME record configuration
- **Wrong IP address**: Check A record points to correct server IP
- **Propagation delay**: Wait up to 24 hours for DNS changes

## Expected Final Result

After successful deployment:
- ✅ `https://online.metaweb.ge` loads the welcome page
- ✅ SSL certificate is valid and trusted
- ✅ Application auto-starts on server reboot
- ✅ SSL auto-renews every 90 days
- ✅ All security headers configured
- ✅ Performance optimized with caching

Your subdomain will be fully production-ready with enterprise-grade SSL security!