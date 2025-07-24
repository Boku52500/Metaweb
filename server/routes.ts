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
            <link rel="icon" type="image/x-icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%23667eea;stop-opacity:1' /><stop offset='100%' style='stop-color:%23764ba2;stop-opacity:1' /></linearGradient></defs><circle cx='50' cy='50' r='45' fill='url(%23grad)'/><text x='50' y='65' font-family='Arial, sans-serif' font-size='45' font-weight='bold' text-anchor='middle' fill='white'>M</text></svg>" />
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
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
                font-family: 'Inter', 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                min-height: 100vh;
                background: var(--primary-gradient);
                position: relative;
                overflow-x: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
              }

              /* Animated Background Effects */
              body::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: 
                  radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 40% 80%, rgba(120, 119, 198, 0.2) 0%, transparent 50%);
                animation: backgroundPulse 8s ease-in-out infinite alternate;
                z-index: 0;
              }

              @keyframes backgroundPulse {
                0% { opacity: 0.5; transform: scale(1); }
                100% { opacity: 0.8; transform: scale(1.1); }
              }

              /* Floating Particles */
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
                background: rgba(255, 255, 255, 0.1);
                border-radius: 50%;
                animation: float 6s ease-in-out infinite;
              }

              .particle:nth-child(1) { left: 10%; top: 20%; width: 4px; height: 4px; animation-delay: 0s; }
              .particle:nth-child(2) { left: 20%; top: 80%; width: 6px; height: 6px; animation-delay: 1s; }
              .particle:nth-child(3) { left: 60%; top: 10%; width: 8px; height: 8px; animation-delay: 2s; }
              .particle:nth-child(4) { left: 80%; top: 60%; width: 5px; height: 5px; animation-delay: 3s; }
              .particle:nth-child(5) { left: 70%; top: 30%; width: 3px; height: 3px; animation-delay: 4s; }
              .particle:nth-child(6) { left: 30%; top: 70%; width: 7px; height: 7px; animation-delay: 5s; }

              @keyframes float {
                0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
                50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
              }

              /* Main Container */
              .container {
                background: var(--glass-bg);
                backdrop-filter: blur(20px);
                border-radius: 32px;
                padding: 64px 48px;
                border: 2px solid var(--glass-border);
                box-shadow: 
                  0 32px 64px var(--shadow-dark),
                  inset 0 1px 0 var(--shadow-light);
                text-align: center;
                max-width: 700px;
                width: 100%;
                position: relative;
                z-index: 2;
                transform: translateY(0);
                animation: containerEntry 1s ease-out;
              }

              @keyframes containerEntry {
                0% { 
                  opacity: 0; 
                  transform: translateY(30px) scale(0.95); 
                }
                100% { 
                  opacity: 1; 
                  transform: translateY(0) scale(1); 
                }
              }

              /* Header with Logo Effect */
              .header {
                margin-bottom: 48px;
                position: relative;
              }

              .logo {
                width: 80px;
                height: 80px;
                background: var(--secondary-gradient);
                border-radius: 50%;
                margin: 0 auto 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 36px;
                font-weight: 900;
                color: #000;
                box-shadow: 0 16px 32px rgba(251, 191, 36, 0.3);
                animation: logoRotate 10s linear infinite;
                position: relative;
              }

              .logo::before {
                content: '';
                position: absolute;
                inset: -4px;
                background: var(--accent-gradient);
                border-radius: 50%;
                z-index: -1;
                animation: logoPulse 3s ease-in-out infinite;
              }

              @keyframes logoRotate {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }

              @keyframes logoPulse {
                0%, 100% { opacity: 0.5; transform: scale(1); }
                50% { opacity: 0.8; transform: scale(1.1); }
              }

              h1 {
                font-family: 'Space Grotesk', sans-serif;
                font-size: 4.5rem;
                font-weight: 800;
                background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                margin-bottom: 16px;
                letter-spacing: -0.02em;
                text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                animation: titleGlow 4s ease-in-out infinite alternate;
              }

              @keyframes titleGlow {
                0% { text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); }
                100% { text-shadow: 0 8px 16px rgba(255, 255, 255, 0.1); }
              }

              .subtitle {
                font-size: 1.5rem;
                color: var(--text-secondary);
                font-weight: 500;
                margin-bottom: 48px;
                letter-spacing: 0.01em;
              }

              /* Features Grid */
              .features {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 24px;
                margin-bottom: 48px;
              }

              .feature {
                background: rgba(255, 255, 255, 0.05);
                border-radius: 16px;
                padding: 24px;
                border: 1px solid rgba(255, 255, 255, 0.1);
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
              }

              .feature::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 2px;
                background: var(--accent-gradient);
                transform: scaleX(0);
                transition: transform 0.3s ease;
              }

              .feature:hover {
                transform: translateY(-4px);
                background: rgba(255, 255, 255, 0.1);
                box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2);
              }

              .feature:hover::before {
                transform: scaleX(1);
              }

              .feature-icon {
                font-size: 2rem;
                margin-bottom: 12px;
              }

              .feature-title {
                font-size: 1.1rem;
                font-weight: 600;
                color: var(--text-primary);
                margin-bottom: 8px;
              }

              .feature-desc {
                font-size: 0.9rem;
                color: var(--text-secondary);
                line-height: 1.5;
              }

              /* CTA Button */
              .button {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                background: var(--secondary-gradient);
                color: #000;
                padding: 20px 48px;
                border-radius: 50px;
                font-weight: 700;
                font-size: 1.2rem;
                text-decoration: none;
                box-shadow: 
                  0 16px 32px rgba(251, 191, 36, 0.3),
                  inset 0 1px 0 rgba(255, 255, 255, 0.2);
                transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                position: relative;
                overflow: hidden;
                letter-spacing: 0.02em;
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
                transform: translateY(-3px) scale(1.05);
                box-shadow: 
                  0 20px 40px rgba(251, 191, 36, 0.4),
                  inset 0 1px 0 rgba(255, 255, 255, 0.3);
                background: linear-gradient(135deg, #fcd34d 0%, #fbbf24 100%);
              }

              .button:active {
                transform: translateY(-1px) scale(1.02);
              }

              .emoji {
                margin-right: 12px;
                font-size: 1.4rem;
                animation: bounce 2s infinite;
              }

              @keyframes bounce {
                0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                40% { transform: translateY(-4px); }
                60% { transform: translateY(-2px); }
              }

              /* Responsive Design */
              @media (max-width: 768px) {
                .container { 
                  padding: 48px 32px; 
                  border-radius: 24px; 
                }
                h1 { 
                  font-size: 3rem; 
                }
                .subtitle { 
                  font-size: 1.2rem; 
                }
                .features {
                  grid-template-columns: 1fr;
                  gap: 16px;
                }
                .button { 
                  padding: 18px 36px; 
                  font-size: 1.1rem; 
                }
                .logo {
                  width: 64px;
                  height: 64px;
                  font-size: 28px;
                }
              }

              @media (max-width: 480px) {
                .container { 
                  padding: 32px 24px; 
                  margin: 16px;
                }
                h1 { 
                  font-size: 2.5rem; 
                }
                .subtitle { 
                  font-size: 1.1rem; 
                }
                .button { 
                  padding: 16px 32px; 
                  font-size: 1rem; 
                  width: 100%;
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
            </div>
            
            <div class="container">
              <div class="header">
                <div class="logo">M</div>
                <h1>Welcome to Metaweb</h1>
                <p class="subtitle">Your Gateway to Digital Excellence</p>
              </div>

              <div class="features">
                <div class="feature">
                  <div class="feature-icon">🚀</div>
                  <div class="feature-title">Modern Design</div>
                  <div class="feature-desc">Cutting-edge web solutions crafted with precision</div>
                </div>
                <div class="feature">
                  <div class="feature-icon">⚡</div>
                  <div class="feature-title">Lightning Fast</div>
                  <div class="feature-desc">Optimized performance for exceptional user experience</div>
                </div>
                <div class="feature">
                  <div class="feature-icon">🎯</div>
                  <div class="feature-title">Expert Support</div>
                  <div class="feature-desc">Professional Georgian web development team</div>
                </div>
              </div>

              <a href="https://metaweb.ge" class="button">
                <span class="emoji">🚀</span>
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
