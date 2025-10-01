import { drizzle } from "drizzle-orm/neon-serverless";
import { Pool, neonConfig } from "@neondatabase/serverless";
import ws from "ws";
import {
  type RentalApplication,
  type InsertRentalApplication,
  type AdvertiserApplication,
  type InsertAdvertiserApplication,
  rentalApplications,
  advertiserApplications,
} from "@shared/schema";

neonConfig.webSocketConstructor = ws;

export interface IStorage {
  createRentalApplication(data: InsertRentalApplication): Promise<RentalApplication>;
  getAllRentalApplications(): Promise<RentalApplication[]>;
  createAdvertiserApplication(data: InsertAdvertiserApplication): Promise<AdvertiserApplication>;
  getAllAdvertiserApplications(): Promise<AdvertiserApplication[]>;
}

export class DbStorage implements IStorage {
  private db;

  constructor() {
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    this.db = drizzle(pool);
  }

  async createRentalApplication(data: InsertRentalApplication): Promise<RentalApplication> {
    const [result] = await this.db.insert(rentalApplications).values(data).returning();
    return result;
  }

  async getAllRentalApplications(): Promise<RentalApplication[]> {
    const results = await this.db.select().from(rentalApplications).orderBy(rentalApplications.createdAt);
    return results;
  }

  async createAdvertiserApplication(data: InsertAdvertiserApplication): Promise<AdvertiserApplication> {
    const [result] = await this.db.insert(advertiserApplications).values(data).returning();
    return result;
  }

  async getAllAdvertiserApplications(): Promise<AdvertiserApplication[]> {
    const results = await this.db.select().from(advertiserApplications).orderBy(advertiserApplications.createdAt);
    return results;
  }
}

export const storage = new DbStorage();
