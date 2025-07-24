import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import seoBot from "./routes/seo-bot.js";
import contact from "./routes/contact.js";

export async function registerRoutes(app: Express): Promise<Server> {
  // Subdomain handling - must come first before any other routes
  app.get('/', (req, res, next) => {
    const host = req.get('host') || '';
    console.log(`Root request from host: ${host}`);
    
    // Check if request is from online.metaweb.ge subdomain
    if (host.includes('online.metaweb.ge') || host.includes('online.')) {
      console.log(`Serving welcome page for subdomain: ${host}`);
      return res.send(`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Welcome to Metaweb - Digital Excellence</title>
            <link rel="icon" type="image/png" href="data:image/png;base64,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" />
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
            <style>
              :root {
                --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                --secondary-gradient: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
                --accent-gradient: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
                --glass-bg: rgba(255, 255, 255, 0.1);
                --glass-border: rgba(255, 255, 255, 0.2);
                --text-primary: #ffffff;
                --text-secondary: rgba(255, 255, 255, 0.85);
                --shadow-light: rgba(255, 255, 255, 0.1);
                --shadow-dark: rgba(0, 0, 0, 0.3);
              }

              * { 
                margin: 0; 
                padding: 0; 
                box-sizing: border-box; 
              }

              body { 
                font-family: 'Space Grotesk', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                min-height: 100vh;
                background: 
                  linear-gradient(135deg, #667eea 0%, #764ba2 100%),
                  radial-gradient(ellipse at top left, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                  radial-gradient(ellipse at bottom right, rgba(251, 191, 36, 0.1) 0%, transparent 50%);
                background-size: 100% 100%, 80% 80%, 70% 70%;
                animation: backgroundShift 8s ease-in-out infinite alternate;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
                margin: 0;
                position: relative;
                overflow: hidden;
              }

              @keyframes backgroundShift {
                0% { 
                  background-position: 0% 0%, 0% 0%, 100% 100%; 
                  filter: hue-rotate(0deg);
                }
                100% { 
                  background-position: 0% 0%, 100% 100%, 0% 0%; 
                  filter: hue-rotate(10deg);
                }
              }

              /* Floating Background Elements */
              body::before,
              body::after {
                content: '';
                position: absolute;
                border-radius: 50%;
                animation: float 6s ease-in-out infinite;
                pointer-events: none;
              }

              body::before {
                width: 200px;
                height: 200px;
                background: radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%);
                top: 10%;
                left: 15%;
                animation: float 8s ease-in-out infinite;
              }

              body::after {
                width: 150px;
                height: 150px;
                background: radial-gradient(circle, rgba(251, 191, 36, 0.06) 0%, transparent 70%);
                bottom: 20%;
                right: 10%;
                animation: float 10s ease-in-out infinite reverse;
              }

              @keyframes float {
                0%, 100% { 
                  transform: translateY(0px) translateX(0px) scale(1); 
                  opacity: 0.5;
                }
                50% { 
                  transform: translateY(-30px) translateX(20px) scale(1.1); 
                  opacity: 0.8;
                }
              }





              /* Animated Particles */
              .particles {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 1;
              }

              .particle {
                position: absolute;
                background: rgba(255, 255, 255, 0.4);
                border-radius: 50%;
                animation: particleFloat 12s linear infinite;
              }

              .particle:nth-child(1) { left: 5%; width: 3px; height: 3px; animation-delay: 0s; animation-duration: 15s; }
              .particle:nth-child(2) { left: 15%; width: 2px; height: 2px; animation-delay: 2s; animation-duration: 12s; }
              .particle:nth-child(3) { left: 25%; width: 4px; height: 4px; animation-delay: 4s; animation-duration: 18s; }
              .particle:nth-child(4) { left: 35%; width: 2px; height: 2px; animation-delay: 6s; animation-duration: 14s; }
              .particle:nth-child(5) { left: 45%; width: 3px; height: 3px; animation-delay: 8s; animation-duration: 16s; }
              .particle:nth-child(6) { left: 55%; width: 2px; height: 2px; animation-delay: 10s; animation-duration: 13s; }
              .particle:nth-child(7) { left: 65%; width: 4px; height: 4px; animation-delay: 12s; animation-duration: 17s; }
              .particle:nth-child(8) { left: 75%; width: 3px; height: 3px; animation-delay: 14s; animation-duration: 15s; }
              .particle:nth-child(9) { left: 85%; width: 2px; height: 2px; animation-delay: 16s; animation-duration: 19s; }
              .particle:nth-child(10) { left: 95%; width: 3px; height: 3px; animation-delay: 18s; animation-duration: 14s; }

              @keyframes particleFloat {
                0% {
                  transform: translateY(100vh) rotate(0deg);
                  opacity: 0;
                }
                10% {
                  opacity: 1;
                }
                90% {
                  opacity: 1;
                }
                100% {
                  transform: translateY(-10vh) rotate(360deg);
                  opacity: 0;
                }
              }

              /* Main Container */
              .container {
                background: rgba(255, 255, 255, 0.15);
                backdrop-filter: blur(12px);
                border-radius: 20px;
                padding: 48px 40px;
                border: 1px solid rgba(255, 255, 255, 0.25);
                box-shadow: 
                  0 20px 40px rgba(0, 0, 0, 0.15),
                  inset 0 1px 0 rgba(255, 255, 255, 0.2);
                text-align: center;
                max-width: 420px;
                width: 100%;
                position: relative;
                z-index: 2;
                animation: containerGlow 4s ease-in-out infinite alternate;
              }

              @keyframes containerGlow {
                0% { 
                  box-shadow: 
                    0 20px 40px rgba(0, 0, 0, 0.15),
                    inset 0 1px 0 rgba(255, 255, 255, 0.2);
                }
                100% { 
                  box-shadow: 
                    0 25px 50px rgba(0, 0, 0, 0.2),
                    inset 0 1px 0 rgba(255, 255, 255, 0.3),
                    0 0 30px rgba(255, 255, 255, 0.1);
                }
              }

              h1 {
                font-family: 'Space Grotesk', sans-serif;
                font-size: 2.2rem;
                font-weight: 700;
                color: white;
                margin: 0 0 36px 0;
                letter-spacing: -0.02em;
                text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
                animation: titleShimmer 3s ease-in-out infinite alternate;
              }

              @keyframes titleShimmer {
                0% { 
                  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
                  color: rgba(255, 255, 255, 1);
                }
                100% { 
                  text-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
                  color: rgba(255, 255, 255, 0.9);
                }
              }



              /* CTA Button */
              .button {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                background: rgba(255, 255, 255, 0.25);
                color: white;
                padding: 16px 32px;
                border-radius: 12px;
                font-family: 'Space Grotesk', sans-serif;
                font-weight: 600;
                font-size: 1.1rem;
                text-decoration: none;
                border: 1px solid rgba(255, 255, 255, 0.4);
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                transition: all 0.3s ease;
                letter-spacing: -0.01em;
                position: relative;
                overflow: hidden;
              }

              .button::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
                transition: left 0.5s;
              }

              .button:hover::before {
                left: 100%;
              }

              .button:hover {
                background: rgba(255, 255, 255, 0.35);
                transform: translateY(-2px);
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
                border-color: rgba(255, 255, 255, 0.5);
              }

              .rocket {
                margin-right: 10px;
                font-size: 1.2rem;
                animation: rocketBounce 2s ease-in-out infinite;
              }

              @keyframes rocketBounce {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-3px); }
              }

              /* Responsive Design */
              @media (max-width: 768px) {
                .container { 
                  padding: 40px 32px; 
                  max-width: 380px;
                }
                h1 { 
                  font-size: 2rem; 
                }
                .button {
                  padding: 14px 28px;
                  font-size: 1rem;
                }
              }

              @media (max-width: 480px) {
                .container { 
                  padding: 32px 24px; 
                  margin: 16px;
                  max-width: 340px;
                }
                h1 { 
                  font-size: 1.8rem; 
                }
                .button { 
                  width: 100%;
                  padding: 16px 24px;
                }
              }
            </style>
          </head>
          <body>
            <div class="particles">
              <div class="particle"></div>
              <div class="particle"></div>
              <div class="particle"></div>
              <div class="particle"></div>
              <div class="particle"></div>
              <div class="particle"></div>
              <div class="particle"></div>
              <div class="particle"></div>
              <div class="particle"></div>
              <div class="particle"></div>
            </div>
            
            <div class="container">
              <h1>Welcome to Metaweb</h1>
              <a href="https://metaweb.ge" class="button">
                <span class="rocket">🚀</span>
                Visit Metaweb
              </a>
            </div>
          </body>
        </html>
      `);
    }
    
    // Continue to next middleware (Vite) for normal requests
    next();
  });

  // Test route for subdomain functionality (accessible via main domain)
  app.get('/online-welcome', (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Welcome to Metaweb</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
              font-family: 'ALK Sanet', 'Noto Sans Georgian', sans-serif;
              min-height: 100vh;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 20px;
            }
            .container {
              background: rgba(255, 255, 255, 0.1);
              backdrop-filter: blur(10px);
              border-radius: 24px;
              padding: 48px;
              border: 1px solid rgba(255, 255, 255, 0.2);
              box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
              text-align: center;
              max-width: 600px;
              width: 100%;
            }
            h1 {
              font-size: 4rem;
              font-weight: bold;
              color: white;
              margin-bottom: 32px;
            }
            p {
              font-size: 1.25rem;
              color: rgba(255, 255, 255, 0.8);
              margin-bottom: 48px;
            }
            .button {
              display: inline-flex;
              align-items: center;
              background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
              color: black;
              padding: 24px 48px;
              border-radius: 16px;
              font-weight: bold;
              font-size: 1.25rem;
              text-decoration: none;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
              transition: all 0.3s ease;
            }
            .button:hover {
              transform: translateY(-2px) scale(1.05);
              box-shadow: 0 15px 35px rgba(251, 191, 36, 0.3);
              background: linear-gradient(135deg, #fcd34d 0%, #fbbf24 100%);
            }
            .emoji {
              margin-right: 12px;
              font-size: 1.5rem;
            }
            .note {
              margin-top: 32px;
              padding: 16px;
              background: rgba(255, 255, 255, 0.05);
              border-radius: 12px;
              font-size: 0.9rem;
              color: rgba(255, 255, 255, 0.7);
            }
            @media (max-width: 768px) {
              h1 { font-size: 2.5rem; }
              .container { padding: 32px 24px; }
              .button { padding: 20px 32px; font-size: 1.1rem; }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Welcome to Metaweb</h1>
            <p>Your Gateway to Digital Excellence</p>
            <a href="https://metaweb.ge" class="button">
              <span class="emoji">🚀</span>
              Visit Metaweb
            </a>
            <div class="note">
              <strong>Note:</strong> This is a preview of the online.metaweb.ge subdomain page.
            </div>
          </div>
        </body>
      </html>
    `);
  });

  // SEO Bot API routes
  app.use("/api/seo-bot", seoBot);
  
  // Contact form API routes
  app.use("/api/contact", contact);

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
