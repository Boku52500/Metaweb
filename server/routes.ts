import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import seoBot from "./routes/seo-bot.js";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // SEO Bot API routes
  app.use("/api/seo-bot", seoBot);

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
