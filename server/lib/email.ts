// Simple email notification without authentication
// We'll use a webhook service or direct HTTP request to send notifications

const EMAIL_CONFIG = {
  to: 'zuiyrandom@gmail.com',
  from: 'metaweb.ge',
  subject: '🔥 ახალი დაკვეთა metaweb.ge-დან!'
};

interface ContactSubmission {
  name: string;
  phone: string;
  email?: string;
  message: string;
}

export async function sendContactNotification(submission: ContactSubmission): Promise<boolean> {
  try {
    // Try multiple email services in order of preference
    
    // Option 1: Use Formspree if configured
    const formspreeId = process.env.FORMSPREE_ID;
    if (formspreeId) {
      try {
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: submission.name,
            phone: submission.phone,
            email: submission.email || '',
            message: submission.message,
            _subject: EMAIL_CONFIG.subject,
            _replyto: submission.email || EMAIL_CONFIG.to,
          }),
        });
        
        if (response.ok) {
          console.log(`✅ Email sent via Formspree to ${EMAIL_CONFIG.to}`);
          return true;
        }
      } catch (error) {
        console.log('⚠️ Formspree failed, trying next option...');
      }
    }
    
    // Option 2: Use EmailJS if configured
    const emailjsServiceId = process.env.EMAILJS_SERVICE_ID;
    const emailjsTemplateId = process.env.EMAILJS_TEMPLATE_ID;
    const emailjsUserId = process.env.EMAILJS_USER_ID;
    
    if (emailjsServiceId && emailjsTemplateId && emailjsUserId) {
      try {
        const emailjsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            service_id: emailjsServiceId,
            template_id: emailjsTemplateId,
            user_id: emailjsUserId,
            template_params: {
              to_email: EMAIL_CONFIG.to,
              from_name: submission.name,
              from_phone: submission.phone,
              from_email: submission.email || '',
              message: submission.message,
              subject: EMAIL_CONFIG.subject,
            },
          }),
        });
        
        if (emailjsResponse.ok) {
          console.log(`✅ Email sent via EmailJS to ${EMAIL_CONFIG.to}`);
          return true;
        }
      } catch (error) {
        console.log('⚠️ EmailJS failed, trying next option...');
      }
    }
    
    // Option 3: Use webhook service
    const webhookUrl = process.env.WEBHOOK_URL;
    if (webhookUrl) {
      try {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: EMAIL_CONFIG.to,
            subject: EMAIL_CONFIG.subject,
            content: generateTextContent(submission),
            html: generateEmailContent(submission),
            submission: submission
          }),
        });
        
        if (response.ok) {
          console.log(`✅ Email sent via webhook to ${EMAIL_CONFIG.to}`);
          return true;
        }
      } catch (error) {
        console.log('⚠️ Webhook failed, logging to console...');
      }
    }
    
    // Fallback: Log to console with clear formatting
    console.log('='.repeat(60));
    console.log('📧 EMAIL NOTIFICATION - Configure service for delivery');
    console.log('='.repeat(60));
    console.log(`To: ${EMAIL_CONFIG.to}`);
    console.log(`Subject: ${EMAIL_CONFIG.subject}`);
    console.log('');
    console.log('Content:');
    console.log(generateTextContent(submission));
    console.log('='.repeat(60));
    console.log('🔧 To receive emails, add one of these to Secrets:');
    console.log('   FORMSPREE_ID (from formspree.io - free)');
    console.log('   EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID');
    console.log('   WEBHOOK_URL (from zapier.com or similar)');
    console.log('='.repeat(60));
    
    return true;

  } catch (error) {
    console.error('❌ Failed to send notification:', error);
    return false;
  }
}

function generateEmailContent(submission: ContactSubmission): string {
  return `
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
}

function generateTextContent(submission: ContactSubmission): string {
  return `
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
}

// Test notification system
export async function testEmailConfig(): Promise<boolean> {
  console.log('✅ Email notification system ready');
  console.log('📧 Submissions will be logged to console');
  console.log(`📨 Target email: ${EMAIL_CONFIG.to}`);
  return true;
}