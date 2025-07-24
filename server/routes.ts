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
