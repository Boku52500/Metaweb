# Subdomain Setup Instructions for online.metaweb.ge

## Current Status
The subdomain functionality is implemented in the server code and working locally. The server detects subdomain requests and serves a dedicated welcome page for `online.metaweb.ge`.

## Testing During Development
You can test the subdomain functionality using the test route:
```
https://your-main-domain.com/online-welcome
```

This shows exactly what visitors will see when they visit `online.metaweb.ge` in production.

## Production Setup Required

### 1. DNS Configuration
Add a CNAME record in your DNS settings:
- **Type**: CNAME
- **Name**: online
- **Value**: metaweb.ge (or your main domain)
- **TTL**: 300 (or as recommended by your DNS provider)

### 2. SSL Certificate Configuration

#### Option A: Wildcard SSL Certificate (Recommended)
- Obtain a wildcard SSL certificate for `*.metaweb.ge`
- This covers all subdomains including `online.metaweb.ge`
- Configure your hosting provider to use this certificate

#### Option B: Individual SSL Certificate
- Obtain a specific SSL certificate for `online.metaweb.ge`
- Configure your hosting provider with this certificate

#### Option C: Cloudflare (Easiest)
- Use Cloudflare as your DNS provider
- Enable Cloudflare proxy for the subdomain
- Cloudflare automatically provides SSL certificates for subdomains

### 3. Server Configuration
The server code is already configured to:
- Detect requests to `online.metaweb.ge`
- Serve the welcome page for subdomain visitors
- Continue normal operation for main domain requests

### 4. Verification Steps
Once DNS and SSL are configured:

1. Test HTTP access: `http://online.metaweb.ge`
2. Test HTTPS access: `https://online.metaweb.ge`
3. Verify the welcome page displays correctly
4. Check that the "Visit Metaweb" button redirects to main site

## Expected Result
When properly configured, visitors to `online.metaweb.ge` will see:
- Professional welcome page with gradient background
- "Welcome to Metaweb" heading
- "Your Gateway to Digital Excellence" tagline
- "Visit Metaweb" button linking to main site
- Mobile-responsive design with ALK Sanet font

## Troubleshooting

### "Not Found" Error
- Check DNS propagation (can take up to 24 hours)
- Verify CNAME record points to correct domain
- Check hosting provider subdomain configuration

### SSL Certificate Error
- Ensure SSL certificate covers the subdomain
- Check certificate installation on hosting provider
- Consider using Cloudflare for automatic SSL

### Page Not Loading
- Verify server is running and accessible
- Check firewall settings allow subdomain traffic
- Review server logs for errors

## Current Implementation Details
- Server detects Host header for `online.metaweb.ge`
- Welcome page served as static HTML (no React routing)
- Styled with inline CSS for fast loading
- Compatible with all modern browsers
- No external dependencies for subdomain functionality