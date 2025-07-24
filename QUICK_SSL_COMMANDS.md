# Quick SSL Setup Commands for online.metaweb.ge

## Fastest Setup - Let's Encrypt + Nginx

```bash
# 1. Install required packages
sudo apt update
sudo apt install nginx certbot python3-certbot-nginx

# 2. Create basic Nginx config
sudo tee /etc/nginx/sites-available/online.metaweb.ge << EOF
server {
    listen 80;
    server_name online.metaweb.ge;
    
    location / {
        proxy_pass http://localhost:5000;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
EOF

# 3. Enable the site
sudo ln -s /etc/nginx/sites-available/online.metaweb.ge /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# 4. Get SSL certificate
sudo certbot --nginx -d online.metaweb.ge

# 5. Start your Node.js app
npm run dev
```

## Fastest Setup - Let's Encrypt + Apache

```bash
# 1. Install required packages
sudo apt update
sudo apt install apache2 certbot python3-certbot-apache

# 2. Enable required modules
sudo a2enmod ssl proxy proxy_http

# 3. Create virtual host
sudo tee /etc/apache2/sites-available/online.metaweb.ge.conf << EOF
<VirtualHost *:80>
    ServerName online.metaweb.ge
    ProxyPreserveHost On
    ProxyPass / http://localhost:5000/
    ProxyPassReverse / http://localhost:5000/
</VirtualHost>
EOF

# 4. Enable the site
sudo a2ensite online.metaweb.ge.conf
sudo systemctl reload apache2

# 5. Get SSL certificate
sudo certbot --apache -d online.metaweb.ge

# 6. Start your Node.js app
npm run dev
```

## DNS Setup First

Before running SSL commands, ensure DNS is configured:

```bash
# Check if DNS is working
nslookup online.metaweb.ge

# If not working, add DNS record:
# Type: CNAME
# Name: online
# Value: your-main-domain.com
```

## Cloudflare Alternative (No Server Config Needed)

1. Go to Cloudflare dashboard
2. Add site: `metaweb.ge`
3. Add DNS record: `CNAME online metaweb.ge`
4. Enable SSL/TLS → Full
5. Enable "Always Use HTTPS"

## After SSL Setup - Test Commands

```bash
# Test SSL certificate
curl -I https://online.metaweb.ge

# Test subdomain detection
curl -H "Host: online.metaweb.ge" https://your-server.com

# Check SSL rating
# Visit: https://www.ssllabs.com/ssltest/analyze.html?d=online.metaweb.ge
```

## Production Deployment

```bash
# 1. Build and deploy your app
npm run build
pm2 start dist/index.js --name metaweb

# 2. Enable auto-start
pm2 startup
pm2 save

# 3. Set up SSL auto-renewal
sudo crontab -e
# Add: 0 3 * * * /usr/bin/certbot renew --quiet
```

Choose the method that matches your current server setup!