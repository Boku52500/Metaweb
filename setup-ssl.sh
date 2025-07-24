#!/bin/bash

# SSL Setup Script for online.metaweb.ge
# Run this script on your production server

set -e

echo "🔐 Setting up SSL for online.metaweb.ge with Let's Encrypt"
echo "=================================================="

# Check if running as root
if [[ $EUID -eq 0 ]]; then
   echo "This script should not be run as root. Use sudo when needed."
   exit 1
fi

# Update system packages
echo "📦 Updating system packages..."
sudo apt update

# Install nginx and certbot
echo "🚀 Installing nginx and certbot..."
sudo apt install -y nginx certbot python3-certbot-nginx

# Create nginx configuration for the subdomain
echo "⚙️ Creating nginx configuration..."
sudo tee /etc/nginx/sites-available/online.metaweb.ge << 'EOF'
server {
    listen 80;
    server_name online.metaweb.ge;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    
    # Proxy to Node.js application
    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host $host;
        proxy_cache_bypass $http_upgrade;
    }
    
    # Serve static files if needed
    location /static/ {
        alias /var/www/metaweb/static/;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
EOF

# Enable the site
echo "🔗 Enabling nginx site..."
sudo ln -sf /etc/nginx/sites-available/online.metaweb.ge /etc/nginx/sites-enabled/

# Remove default nginx site if it exists
sudo rm -f /etc/nginx/sites-enabled/default

# Test nginx configuration
echo "✅ Testing nginx configuration..."
sudo nginx -t

# Reload nginx
echo "🔄 Reloading nginx..."
sudo systemctl reload nginx

# Enable nginx to start on boot
sudo systemctl enable nginx

# Check if DNS is properly configured
echo "🌐 Checking DNS configuration for online.metaweb.ge..."
if nslookup online.metaweb.ge > /dev/null 2>&1; then
    echo "✅ DNS is configured correctly"
else
    echo "❌ DNS is not configured. Please set up CNAME record:"
    echo "   Type: CNAME"
    echo "   Name: online"
    echo "   Value: metaweb.ge (or your main domain)"
    echo ""
    echo "Wait for DNS propagation (up to 24 hours) before continuing."
    read -p "Press Enter when DNS is ready, or Ctrl+C to exit..."
fi

# Get SSL certificate with Let's Encrypt
echo "🔐 Obtaining SSL certificate with Let's Encrypt..."
echo "You will be prompted for:"
echo "- Email address (for renewal notifications)"
echo "- Agreement to terms of service"
echo "- Optional sharing of email with EFF"
echo ""

# Run certbot with nginx plugin
sudo certbot --nginx -d online.metaweb.ge --non-interactive --agree-tos --email your-email@example.com || {
    echo "❌ Automatic SSL setup failed. Running interactive mode..."
    sudo certbot --nginx -d online.metaweb.ge
}

# Test automatic renewal
echo "🔄 Testing SSL certificate auto-renewal..."
sudo certbot renew --dry-run

# Set up automatic renewal cron job
echo "⏰ Setting up automatic SSL renewal..."
(crontab -l 2>/dev/null; echo "0 3 * * * /usr/bin/certbot renew --quiet") | crontab -

# Display final configuration
echo ""
echo "🎉 SSL setup completed successfully!"
echo "=================================================="
echo "✅ Nginx configured and running"
echo "✅ SSL certificate installed"
echo "✅ Auto-renewal configured"
echo ""
echo "Your subdomain is now available at:"
echo "🔗 https://online.metaweb.ge"
echo ""
echo "Make sure your Node.js application is running on port 5000:"
echo "cd /path/to/your/app && npm run dev"
echo ""
echo "Test your setup:"
echo "curl -I https://online.metaweb.ge"
echo ""
echo "SSL certificate will auto-renew every 90 days."