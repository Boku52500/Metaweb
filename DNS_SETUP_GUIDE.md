# DNS Setup for online.metaweb.ge

## Current Status
DNS lookup for `online.metaweb.ge` is not working - the subdomain doesn't exist yet.

## Step 1: Access Your DNS Provider

You need to log into whichever service manages DNS for `metaweb.ge`:

### Common DNS Providers:
- **Cloudflare** (recommended)
- **GoDaddy** 
- **Namecheap**
- **Google Domains**
- **Amazon Route 53**
- **Your hosting provider's control panel**

## Step 2: Add CNAME Record

Once in your DNS control panel, add this record:

```
Type: CNAME
Name: online
Value: metaweb.ge
TTL: 300 (or Auto)
```

### Example for Different Providers:

#### Cloudflare:
1. Go to DNS tab
2. Click "Add record"
3. Type: CNAME
4. Name: online
5. Target: metaweb.ge
6. Click Save

#### GoDaddy:
1. Go to DNS Management
2. Click "Add"
3. Type: CNAME
4. Host: online
5. Points to: metaweb.ge
6. Save

#### cPanel/WHM:
1. Go to Zone Editor
2. Add Record
3. Type: CNAME
4. Name: online.metaweb.ge
5. CNAME: metaweb.ge
6. Save

## Step 3: Wait for DNS Propagation

After adding the record:
- **Minimum wait**: 5-10 minutes
- **Maximum wait**: 24-48 hours
- **Typical time**: 1-2 hours

## Step 4: Test DNS

Keep testing until this works:
```cmd
nslookup online.metaweb.ge
```

**Expected result:**
```
Server:  dns.server.com
Address:  1.2.3.4

Non-authoritative answer:
Name:    metaweb.ge
Address:  YOUR_SERVER_IP
Aliases:  online.metaweb.ge
```

## Step 5: Once DNS Works

When `nslookup online.metaweb.ge` returns your server's IP, then run the SSL setup commands:

```bash
sudo apt install nginx certbot python3-certbot-nginx
sudo certbot --nginx -d online.metaweb.ge
```

## Troubleshooting

### If DNS still doesn't work after 24 hours:
1. Double-check the CNAME record format
2. Ensure there are no conflicting A records
3. Try using a DNS checker: https://dnschecker.org
4. Contact your DNS provider support

### Quick DNS Test Tools:
- Online: https://dnschecker.org/#CNAME/online.metaweb.ge
- Command: `dig CNAME online.metaweb.ge`
- Command: `nslookup -type=CNAME online.metaweb.ge`

## Next Steps

1. **Now**: Set up the CNAME record in your DNS provider
2. **Wait**: For DNS propagation (1-24 hours)
3. **Test**: `nslookup online.metaweb.ge` until it shows your server IP
4. **Then**: Run the SSL setup commands

The SSL certificate setup will fail without proper DNS, so DNS configuration is the critical first step.