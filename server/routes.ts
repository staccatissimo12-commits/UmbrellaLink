import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRentalApplicationSchema, insertAdvertiserApplicationSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/rental-applications", async (req, res) => {
    try {
      const validatedData = insertRentalApplicationSchema.parse(req.body);
      const result = await storage.createRentalApplication(validatedData);
      res.json(result);
    } catch (error) {
      console.error("Error creating rental application:", error);
      res.status(400).json({ error: "Invalid request data" });
    }
  });

  app.get("/api/rental-applications", async (req, res) => {
    try {
      const results = await storage.getAllRentalApplications();
      res.json(results);
    } catch (error) {
      console.error("Error fetching rental applications:", error);
      res.status(500).json({ error: "Failed to fetch rental applications" });
    }
  });

  app.post("/api/advertiser-applications", async (req, res) => {
    try {
      const validatedData = insertAdvertiserApplicationSchema.parse(req.body);
      const result = await storage.createAdvertiserApplication(validatedData);
      res.json(result);
    } catch (error) {
      console.error("Error creating advertiser application:", error);
      res.status(400).json({ error: "Invalid request data" });
    }
  });

  app.get("/api/advertiser-applications", async (req, res) => {
    try {
      const results = await storage.getAllAdvertiserApplications();
      res.json(results);
    } catch (error) {
      console.error("Error fetching advertiser applications:", error);
      res.status(500).json({ error: "Failed to fetch advertiser applications" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
