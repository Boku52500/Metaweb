import nodemailer from 'nodemailer';

// Email configuration
const EMAIL_CONFIG = {
  to: 'zuiyrandom@gmail.com',
  from: 'noreply@metaweb.ge',
  subject: '🔥 ახალი დაკვეთა metaweb.ge-დან!'
};

// Create transporter (using Gmail SMTP as fallback)
const createTransporter = () => {
  // Try to use environment variables first
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  // Fallback to Gmail (requires app password)
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER || 'your-gmail@gmail.com',
      pass: process.env.GMAIL_APP_PASSWORD || 'your-app-password',
    },
  });
};

interface ContactSubmission {
  name: string;
  phone: string;
  email?: string;
  message: string;
}

export async function sendContactNotification(submission: ContactSubmission): Promise<boolean> {
  try {
    const transporter = createTransporter();

    const htmlContent = `
      <div style="font-family: 'Noto Sans Georgian', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa; padding: 20px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 28px;">🔥 ახალი დაკვეთა!</h1>
          <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">metaweb.ge საიტიდან</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <h2 style="color: #333; margin-top: 0; font-size: 24px;">კლიენტის ინფორმაცია:</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <div style="margin-bottom: 15px;">
              <strong style="color: #495057; font-size: 16px;">👤 სახელი:</strong>
              <div style="font-size: 18px; color: #212529; margin-top: 5px;">${submission.name}</div>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #495057; font-size: 16px;">📞 ტელეფონი:</strong>
              <div style="font-size: 18px; color: #212529; margin-top: 5px;">
                <a href="tel:${submission.phone}" style="color: #007bff; text-decoration: none;">${submission.phone}</a>
              </div>
            </div>
            
            ${submission.email ? `
            <div style="margin-bottom: 15px;">
              <strong style="color: #495057; font-size: 16px;">📧 ელ-ფოსტა:</strong>
              <div style="font-size: 18px; color: #212529; margin-top: 5px;">
                <a href="mailto:${submission.email}" style="color: #007bff; text-decoration: none;">${submission.email}</a>
              </div>
            </div>
            ` : ''}
            
            <div>
              <strong style="color: #495057; font-size: 16px;">💬 შეტყობინება:</strong>
              <div style="font-size: 16px; color: #212529; margin-top: 5px; line-height: 1.6; background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
                ${submission.message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
          
          <div style="background: linear-gradient(45deg, #28a745, #20c997); color: white; padding: 20px; border-radius: 8px; text-align: center; margin: 25px 0;">
            <h3 style="margin: 0 0 10px 0; font-size: 20px;">🚀 სწრაფი რეაგირება!</h3>
            <p style="margin: 0; font-size: 16px; opacity: 0.9;">დარეკეთ კლიენტს 5-10 წუთში მაქსიმალური შედეგისთვის</p>
          </div>
          
          <div style="text-align: center; padding: 20px 0; border-top: 1px solid #dee2e6;">
            <p style="color: #6c757d; margin: 0; font-size: 14px;">
              გაგზავნილია: ${new Date().toLocaleString('ka-GE', { 
                timeZone: 'Asia/Tbilisi',
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
            <p style="color: #6c757d; margin: 5px 0 0 0; font-size: 12px;">
              metaweb.ge - საიტის დამზადება საქართველოში
            </p>
          </div>
        </div>
      </div>
    `;

    const textContent = `
🔥 ახალი დაკვეთა metaweb.ge-დან!

კლიენტის ინფორმაცია:
👤 სახელი: ${submission.name}
📞 ტელეფონი: ${submission.phone}
${submission.email ? `📧 ელ-ფოსტა: ${submission.email}` : ''}

💬 შეტყობინება:
${submission.message}

⏰ გაგზავნილია: ${new Date().toLocaleString('ka-GE', { timeZone: 'Asia/Tbilisi' })}

🚀 სწრაფი რეაგირება! დარეკეთ კლიენტს 5-10 წუთში მაქსიმალური შედეგისთვის.
    `;

    const mailOptions = {
      from: EMAIL_CONFIG.from,
      to: EMAIL_CONFIG.to,
      subject: EMAIL_CONFIG.subject,
      text: textContent,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);
    console.log(`✅ Email notification sent to ${EMAIL_CONFIG.to}`);
    return true;

  } catch (error) {
    console.error('❌ Failed to send email notification:', error);
    return false;
  }
}

// Test email configuration
export async function testEmailConfig(): Promise<boolean> {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log('✅ Email configuration is valid');
    return true;
  } catch (error) {
    console.error('❌ Email configuration test failed:', error);
    return false;
  }
}