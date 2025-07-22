# 📧 Email Setup for Contact Form Submissions

## ✅ What's Configured

Your contact form now sends submissions to: **zuiyrandom@gmail.com**

## 🔧 Email Configuration Options

### **Option 1: Gmail (Recommended)**
1. Go to your Gmail settings: https://myaccount.google.com/security
2. Enable 2-factor authentication
3. Generate an "App Password" for this website
4. Add these secrets in Replit:

```
GMAIL_USER=zuiyrandom@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
```

### **Option 2: Custom SMTP Server**
If you have your own email server, add these secrets:

```
SMTP_HOST=smtp.yourdomain.com
SMTP_PORT=587
SMTP_USER=noreply@metaweb.ge
SMTP_PASS=your-smtp-password
SMTP_SECURE=false
```

## 📝 How It Works

### **When someone submits the form:**
1. Form data is validated and saved
2. Beautiful email is sent to zuiyrandom@gmail.com
3. Email includes:
   - Client name, phone, email, message
   - Georgian-formatted timestamp
   - Professional styling
   - Direct links to call/email client

### **Email Template Preview:**
```
🔥 ახალი დაკვეთა metaweb.ge-დან!

კლიენტის ინფორმაცია:
👤 სახელი: [Client Name]
📞 ტელეფონი: [Phone Number] (clickable)
📧 ელ-ფოსტა: [Email] (clickable)

💬 შეტყობინება:
[Client Message]

🚀 სწრაფი რეაგირება! დარეკეთ კლიენტს 5-10 წუთში.
```

## 🚨 Current Status

**Without Email Credentials:**
- Form submissions work and are logged in console
- No emails sent yet (needs Gmail app password)

**After Adding Credentials:**
- Automatic email notifications to zuiyrandom@gmail.com
- Professional email format with Georgian text
- Immediate notifications for new leads

## 🛠️ Setup Steps

### **Step 1: Generate Gmail App Password**
1. Visit: https://myaccount.google.com/security
2. Search "App passwords" 
3. Generate password for "Mail"
4. Copy the 16-character password

### **Step 2: Add to Replit Secrets**
1. Open Replit secrets tab
2. Add: `GMAIL_USER` = `zuiyrandom@gmail.com`
3. Add: `GMAIL_APP_PASSWORD` = `[your-16-char-password]`

### **Step 3: Restart Application**
- Email notifications will start working immediately

## 📊 Monitoring

### **Server Logs Show:**
```
📞 NEW CONTACT SUBMISSION:
Name: [Client Name]
Phone: [Phone Number]
📧 Email notification sent to zuiyrandom@gmail.com
```

### **Failed Email Logs:**
```
⚠️ Email notification failed - check configuration
❌ Failed to send email notification: [error details]
```

## 🔒 Security Notes

- App passwords are safer than regular passwords
- Only works with 2-factor authentication enabled
- Emails sent securely via Gmail SMTP
- No sensitive data stored in code

## 🎯 Expected Timeline

- **Immediate:** Form submissions logged in console
- **After setup:** Email notifications to zuiyrandom@gmail.com
- **Response time:** 5-10 minutes for best conversion rates

---

**Next Step:** Add Gmail credentials to receive email notifications immediately when clients submit contact forms.