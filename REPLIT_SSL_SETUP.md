# SSL Setup for online.metaweb.ge on Replit

## Current Situation
You're hosting on Replit, which means:
- The website runs on Replit's infrastructure
- Domain configuration happens through Replit's domain settings
- SSL certificates are managed by Replit automatically

## Replit Domain Configuration

### Step 1: Custom Domain Setup
1. Go to your Replit project
2. Click on the "Deployments" tab or domain settings
3. Look for "Custom Domain" or "Domain Settings"
4. Add `online.metaweb.ge` as a custom domain

### Step 2: DNS Configuration (External)
Even on Replit, you still need to configure DNS:

**In your domain registrar (where you bought metaweb.ge):**
- Type: `CNAME`
- Name: `online`
- Value: `your-replit-url.replit.app` or the domain Replit provides

### Step 3: Replit SSL
Replit automatically provides SSL certificates for custom domains once DNS is configured.

## Alternative: Use Replit's Built-in Domain

Instead of configuring external SSL, you can use:
- `https://your-project-name.your-username.replit.app`
- This already has SSL enabled by Replit

## Replit Deployment Options

### Option 1: Always On Deployment
1. Go to your Replit project
2. Click "Deploy" button
3. Enable "Always On" 
4. Configure custom domain there

### Option 2: Reserved VM
1. Upgrade to Replit Core plan
2. Get dedicated hosting
3. Full custom domain support with SSL

## Current Server Configuration
The Node.js server is already configured to handle:
- HTTP on port 5000 (handled by Replit)
- HTTPS via Replit's automatic SSL
- Subdomain detection working correctly

## Next Steps
1. Check Replit's deployment/domain settings
2. Add custom domain `online.metaweb.ge`
3. Configure DNS CNAME to point to Replit
4. Replit handles SSL automatically

## Testing
Once configured:
- `https://online.metaweb.ge` will work with Replit's SSL
- No manual certificate installation needed
- Automatic renewal handled by Replit