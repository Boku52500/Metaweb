# SSL Certificate Setup for online.metaweb.ge

## SSL Certificate Files Required

To enable HTTPS for the subdomain `online.metaweb.ge`, you need to place the following SSL certificate files in this directory:

### Required Files:
1. **online.metaweb.ge.key** - Private key file
2. **online.metaweb.ge.crt** - Certificate file
3. **ca-bundle.crt** - Certificate Authority bundle (if required)

### File Structure:
```
ssl/
├── README.md (this file)
├── online.metaweb.ge.key
├── online.metaweb.ge.crt
└── ca-bundle.crt (optional)
```

## How to Obtain SSL Certificates

### Option 1: Let's Encrypt (Free)
```bash
# Install certbot
sudo apt-get install certbot

# Generate certificate for subdomain
sudo certbot certonly --standalone -d online.metaweb.ge

# Certificates will be in /etc/letsencrypt/live/online.metaweb.ge/
# Copy them to this directory:
# - privkey.pem → online.metaweb.ge.key
# - fullchain.pem → online.metaweb.ge.crt
```

### Option 2: Commercial SSL Provider
1. Purchase SSL certificate from provider (GoDaddy, Namecheap, etc.)
2. Generate CSR (Certificate Signing Request)
3. Submit CSR to SSL provider
4. Download certificate files
5. Place files in this directory with correct names

### Option 3: Cloudflare (Recommended)
1. Add domain to Cloudflare
2. Set DNS CNAME record: online → metaweb.ge
3. Enable SSL/TLS encryption
4. Use Cloudflare's Origin Certificates or Full SSL mode

## Server Configuration

The server is configured to:
- Check for SSL certificate files in this directory
- Start HTTPS server on port 443 if certificates are found
- Fall back to HTTP only if certificates are missing
- Redirect HTTP to HTTPS for subdomain requests

## Testing SSL Setup

Once certificates are in place:
1. Restart the server
2. Test: `https://online.metaweb.ge`
3. Verify SSL certificate in browser
4. Check for any SSL warnings or errors

## Troubleshooting

### Certificate Issues
- Ensure certificate matches exact domain: online.metaweb.ge
- Check certificate expiration date
- Verify certificate chain is complete

### Permission Issues
- Certificate files should be readable by server process
- Private key should have restricted permissions (600)

### DNS Issues
- Verify CNAME record: online.metaweb.ge → metaweb.ge
- Check DNS propagation (up to 24 hours)
- Use DNS checker tools to verify records

## Security Notes
- Never commit certificate files to version control
- Keep private key secure and with restricted access
- Set up certificate renewal for Let's Encrypt
- Monitor certificate expiration dates