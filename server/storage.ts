import { db } from "./db.js";
import {
  services, projects, messages,
  type Service, type Project, type Testimonial, type Message, type InsertMessage
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getServices(): Promise<Service[]>;
  getProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createMessage(message: InsertMessage): Promise<Message>;
  
  // Seeding helpers
  createService(service: any): Promise<void>;
  createProject(project: any): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getServices(): Promise<Service[]> {
    return await db.select().from(services).orderBy(services.displayOrder);
  }

  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async getProject(id: number): Promise<Project | undefined> {
    const [project] = await db.select().from(projects).where(eq(projects.id, id));
    return project;
  }

  async createMessage(message: InsertMessage): Promise<Message> {
    const [newMessage] = await db.insert(messages).values(message).returning();
    return newMessage;
  }

  async createService(service: any): Promise<void> {
    await db.insert(services).values(service);
  }
  async createProject(project: any): Promise<void> {
    await db.insert(projects).values(project);
  }
}

export const storage = new DatabaseStorage();