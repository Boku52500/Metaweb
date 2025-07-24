import express, { type Request, Response, NextFunction } from "express";
import https from "https";
import fs from "fs";
import path from "path";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // SSL Configuration for subdomain support
  function startSSLServer() {
    try {
      // Check if SSL certificates exist for subdomain
      const keyPath = path.join(process.cwd(), 'ssl', 'online.metaweb.ge.key');
      const certPath = path.join(process.cwd(), 'ssl', 'online.metaweb.ge.crt');
      
      if (fs.existsSync(keyPath) && fs.existsSync(certPath)) {
        const sslOptions = {
          key: fs.readFileSync(keyPath),
          cert: fs.readFileSync(certPath)
        };
        
        // Create HTTPS server for SSL
        const httpsServer = https.createServer(sslOptions, app);
        
        // Start HTTPS server on port 443 (or 8443 for development)
        const httpsPort = process.env.NODE_ENV === 'production' ? 443 : 8443;
        httpsServer.listen(httpsPort, '0.0.0.0', () => {
          log(`HTTPS server running on port ${httpsPort} with SSL support for online.metaweb.ge`);
        });
        
        return true;
      } else {
        log('SSL certificates not found. HTTPS server not started.');
        log('Place SSL certificates in ssl/ directory to enable HTTPS.');
        return false;
      }
    } catch (error) {
      log(`SSL setup failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
      return false;
    }
  }

  // Add HTTP to HTTPS redirect middleware for subdomain
  app.use((req, res, next) => {
    const host = req.get('host') || '';
    const protocol = req.headers['x-forwarded-proto'] || req.protocol;
    
    // Redirect HTTP to HTTPS for subdomain if SSL is available
    if (host.includes('online.metaweb.ge') && protocol === 'http') {
      const sslPort = process.env.NODE_ENV === 'production' ? '' : ':8443';
      return res.redirect(301, `https://${host}${sslPort}${req.url}`);
    }
    
    next();
  });

  // Start SSL server if certificates are available
  const sslStarted = startSSLServer();

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '5000', 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`HTTP server running on port ${port}`);
    if (sslStarted) {
      log(`SSL enabled - subdomain online.metaweb.ge available via HTTPS`);
    } else {
      log(`SSL not configured - see ssl/README.md for setup instructions`);
    }
  });
})();
