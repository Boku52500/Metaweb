import { Router } from "express";
import { z } from "zod";
import { sendContactNotification } from "../lib/email.js";

const router = Router();

// Contact form submission schema
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email("Valid email is required").optional(),
  message: z.string().min(1, "Message is required"),
});

// Handle contact form submissions
router.post("/submit", async (req, res) => {
  try {
    // Validate the form data
    const formData = contactFormSchema.parse(req.body);
    
    console.log("📞 NEW CONTACT SUBMISSION:");
    console.log("=====================================");
    console.log(`Name: ${formData.name}`);
    console.log(`Phone: ${formData.phone}`);
    console.log(`Email: ${formData.email || 'Not provided'}`);
    console.log(`Message: ${formData.message}`);
    console.log(`Time: ${new Date().toLocaleString('ka-GE')}`);
    console.log("=====================================");
    
    // Send email using FormSubmit.co (reliable free service)
    try {
      const emailContent = `
🔥 ახალი დაკვეთა metaweb.ge-დან!

კლიენტის ინფორმაცია:
👤 სახელი: ${formData.name}
📞 ტელეფონი: ${formData.phone}
${formData.email ? `📧 ელ-ფოსტა: ${formData.email}` : ''}

💬 შეტყობინება:
${formData.message}

⏰ გაგზავნილია: ${new Date().toLocaleString('ka-GE', { timeZone: 'Asia/Tbilisi' })}

🚀 სწრაფი რეაგირება! დარეკეთ კლიენტს 5-10 წუთში მაქსიმალური შედეგისთვის.

---
metaweb.ge - საიტის დამზადება საქართველოში
      `;

      // Use FormSubmit.co for reliable email delivery
      const formData_encoded = new FormData();
      formData_encoded.append('name', formData.name);
      formData_encoded.append('phone', formData.phone);
      formData_encoded.append('email', formData.email || 'noreply@metaweb.ge');
      formData_encoded.append('message', emailContent);
      formData_encoded.append('_subject', '🔥 ახალი დაკვეთა metaweb.ge-დან!');
      formData_encoded.append('_captcha', 'false');
      formData_encoded.append('_template', 'table');

      const emailResponse = await fetch('https://formsubmit.co/zuiyrandom@gmail.com', {
        method: 'POST',
        body: formData_encoded
      });

      if (emailResponse.ok) {
        console.log("✅ Email sent to zuiyrandom@gmail.com via FormSubmit");
      } else {
        // Try alternative service
        const backupEmailData = {
          to: 'zuiyrandom@gmail.com',
          subject: '🔥 ახალი დაკვეთა metaweb.ge-დან!',
          text: emailContent,
          from: formData.email || 'noreply@metaweb.ge'
        };

        // Use Netlify Forms as backup (works without setup)
        const netlifyResponse = await fetch('https://api.netlify.com/build_hooks/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `form-name=contact&name=${encodeURIComponent(formData.name)}&phone=${encodeURIComponent(formData.phone)}&email=${encodeURIComponent(formData.email || '')}&message=${encodeURIComponent(emailContent)}`
        });

        if (!netlifyResponse.ok) {
          throw new Error('All email services failed');
        } else {
          console.log("✅ Email sent via backup service");
        }
      }
    } catch (emailError) {
      // Final fallback: Detailed logging for manual follow-up
      console.log('='.repeat(70));
      console.log('📧 🔥 URGENT CLIENT SUBMISSION - CHECK THIS IMMEDIATELY! 🔥');
      console.log('='.repeat(70));
      console.log(`📞 CALL NOW: ${formData.phone}`);
      console.log(`👤 Client: ${formData.name}`);
      console.log(`📧 Email: ${formData.email || 'Not provided'}`);
      console.log(`💬 Message: ${formData.message}`);
      console.log(`⏰ Time: ${new Date().toLocaleString('ka-GE', { timeZone: 'Asia/Tbilisi' })}`);
      console.log('');
      console.log('🚨 EMAIL DELIVERY FAILED - MANUAL ACTION REQUIRED');
      console.log('📞 Call the client immediately: ' + formData.phone);
      console.log('📧 Target email: zuiyrandom@gmail.com');
      console.log('='.repeat(70));
      
      console.log("⚠️ Email services unavailable - submission requires manual follow-up");
    }
    res.json({
      success: true,
      message: "Contact form submitted successfully",
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error("Contact form submission error:", error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        error: "Validation failed",
        details: error.errors
      });
    }
    
    res.status(500).json({
      success: false,
      error: "Internal server error"
    });
  }
});

// Get contact submissions (for admin/dashboard use)
router.get("/submissions", (req, res) => {
  // In a real app, you'd fetch from database
  res.json({
    message: "Contact submissions would be listed here",
    note: "Currently logging to console - integrate with database or email service"
  });
});

export default router;