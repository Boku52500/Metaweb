# Recommended SSL Setup: Nginx + Let's Encrypt

## Why Nginx?
- **Best performance** for Node.js proxy
- **Easiest SSL setup** with certbot
- **Most reliable** SSL auto-renewal
- **Widely documented** and supported

## Step-by-Step Setup Commands

### 1. Install Nginx and Certbot
```bash
sudo apt update
sudo apt install nginx certbot python3-certbot-nginx
```

### 2. Create Nginx Configuration
```bash
sudo tee /etc/nginx/sites-available/online.metaweb.ge << 'EOF'
server {
    listen 80;
    server_name online.metaweb.ge;
    
    # Proxy to your Node.js app
    location / {
        proxy_pass http://localhost:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host $host;
    }
}
EOF
```

### 3. Enable the Site
```bash
sudo ln -s /etc/nginx/sites-available/online.metaweb.ge /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 4. Get SSL Certificate
```bash
sudo certbot --nginx -d online.metaweb.ge
```

### 5. Start Your Application
```bash
# Make sure your Node.js app is running on port 5000
npm run dev
```

## DNS Setup (Do This First!)

Before running the SSL commands, set up DNS:

**In your DNS provider (Cloudflare, GoDaddy, etc.):**
- Type: `CNAME`
- Name: `online`
- Value: `metaweb.ge` (or your main domain)

## Test Everything

```bash
# Test DNS resolution
nslookup online.metaweb.ge

# Test SSL certificate
curl -I https://online.metaweb.ge

# Test your welcome page
curl https://online.metaweb.ge
```

## Expected Results

After setup:
- ✅ `https://online.metaweb.ge` shows welcome page
- ✅ SSL certificate is valid (green lock in browser)
- ✅ No certificate warnings
- ✅ Auto-renewal set up for 90 days

## If You Prefer Different Options

### Apache (Alternative)
- More complex configuration
- Good if you already use Apache
- Same SSL process with `--apache` flag

### Cloudflare (Easiest but less control)
- No server configuration needed
- Automatic SSL handling
- Just add CNAME record and enable SSL

### HAProxy (Advanced)
- Best for load balancing
- More complex setup
- Good for high-traffic sites

**My recommendation: Start with Nginx - it's the sweet spot of simplicity and performance.**

Run the Nginx commands above and your SSL will be ready in 5 minutes!