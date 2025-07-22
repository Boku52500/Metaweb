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
    
    // Send email notification
    const emailSent = await sendContactNotification(formData);
    
    if (emailSent) {
      console.log("📧 Email notification sent to zuiyrandom@gmail.com");
    } else {
      console.log("⚠️ Email notification failed - check configuration");
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