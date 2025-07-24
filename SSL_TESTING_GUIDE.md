# SSL Testing Guide for online.metaweb.ge

## Current SSL Certificate Issue

Chrome is showing `ERR_CERT_COMMON_NAME_INVALID` because:
1. We're using a self-signed certificate (not trusted by browsers)
2. The domain `online.metaweb.ge` doesn't actually resolve to our server
3. HSTS (HTTP Strict Transport Security) policy prevents bypassing SSL warnings

## Testing Solutions

### Option 1: Local Testing with Host File (Recommended for Testing)
Add this line to your hosts file to bypass DNS:
```
127.0.0.1 online.metaweb.ge
```

**Windows**: `C:\Windows\System32\drivers\etc\hosts`
**Mac/Linux**: `/etc/hosts`

Then visit: `https://online.metaweb.ge:8443` and accept the certificate warning.

### Option 2: Use Chrome Flags (Development Only)
Start Chrome with SSL verification disabled:
```bash
# Windows
chrome.exe --ignore-certificate-errors --ignore-ssl-errors --allow-running-insecure-content

# Mac
open -a "Google Chrome" --args --ignore-certificate-errors --ignore-ssl-errors

# Linux
google-chrome --ignore-certificate-errors --ignore-ssl-errors
```

### Option 3: Test via localhost
Visit: `https://localhost:8443/online-welcome`
This bypasses the domain validation completely.

### Option 4: Use curl for Testing
```bash
# Test HTTPS with certificate verification disabled
curl -k -H "Host: online.metaweb.ge" https://localhost:8443/

# Test HTTP redirect functionality
curl -H "Host: online.metaweb.ge" http://localhost:5000/
```

## Production SSL Setup (To Fix This Permanently)

### Step 1: Real Domain Setup
1. Configure DNS CNAME: `online.metaweb.ge` → `your-server.com`
2. Ensure the domain actually resolves to your server

### Step 2: Real SSL Certificate
Replace self-signed certificate with one from a trusted CA:

#### Let's Encrypt (Free)
```bash
sudo certbot certonly --standalone -d online.metaweb.ge
sudo cp /etc/letsencrypt/live/online.metaweb.ge/privkey.pem ssl/online.metaweb.ge.key
sudo cp /etc/letsencrypt/live/online.metaweb.ge/fullchain.pem ssl/online.metaweb.ge.crt
```

#### Commercial SSL Provider
1. Purchase SSL for `online.metaweb.ge`
2. Download certificate files
3. Replace files in `ssl/` directory

#### Cloudflare (Easiest)
1. Add domain to Cloudflare
2. Set CNAME record
3. Enable SSL proxy mode
4. Use Cloudflare's automatic SSL

## Current Server Status
- HTTP Server: Running on port 5000
- HTTPS Server: Running on port 8443 with self-signed SSL
- Subdomain Detection: Working correctly
- Welcome Page: Rendering properly

## What's Working vs. Not Working

### ✅ Working
- Server SSL configuration
- HTTPS server startup
- Subdomain detection logic
- Welcome page rendering
- HTTP to HTTPS redirect logic

### ❌ Not Working (Due to Certificate/DNS)
- Browser SSL validation
- Direct domain access without warnings
- Real-world production readiness

## Immediate Testing Options

1. **Localhost bypass**: `https://localhost:8443/online-welcome`
2. **Host file method**: Add hosts entry then visit `https://online.metaweb.ge:8443`
3. **Curl testing**: Use `-k` flag to bypass SSL verification
4. **Chrome dev mode**: Start with SSL checks disabled

The SSL server setup is correct - it's just the certificate validation that needs real certificates for production use.