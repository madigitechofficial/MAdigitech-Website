import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

async function seedDatabase() {
  const existingServices = await storage.getServices();
  if (existingServices.length === 0) {
    console.log("Seeding database...");

    // Seed Services
    await storage.createService({
      title: "Brand Strategy",
      description:
        "We build brands that stand out. Strategic thinking meets creative excellence.",
      icon: "Lightbulb",
      displayOrder: 1,
    });
    await storage.createService({
      title: "UI/UX Design",
      description:
        "Crafting immersive digital experiences with user-centric design principles.",
      icon: "Layout",
      displayOrder: 2,
    });
    await storage.createService({
      title: "Development",
      description:
        "Clean code, robust architecture, and seamless performance for web & mobile.",
      icon: "Code",
      displayOrder: 3,
    });
    await storage.createService({
      title: "Marketing",
      description: "Data-driven campaigns that drive growth and engagement.",
      icon: "TrendingUp",
      displayOrder: 4,
    });

    // Seed Projects
    await storage.createProject({
      title: "Lumina",
      client: "Lumina Tech",
      category: "Branding",
      image:
        "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop",
      description:
        "A complete rebrand for a cutting-edge lighting technology company.",
      year: "2024",
      isFeatured: true,
    });
    await storage.createProject({
      title: "Apex Finance",
      client: "Apex Group",
      category: "Web Design",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
      description: "Modern fintech dashboard and marketing website.",
      year: "2023",
      isFeatured: true,
    });
    await storage.createProject({
      title: "Velvet",
      client: "Velvet Fashion",
      category: "Development",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2670&auto=format&fit=crop",
      description: "E-commerce platform for a luxury fashion brand.",
      year: "2024",
      isFeatured: true,
    });
    await storage.createProject({
      title: "Mono",
      client: "Mono Arch",
      category: "Architecture",
      image:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2670&auto=format&fit=crop",
      description: "Digital portfolio for an award-winning architecture firm.",
      year: "2023",
      isFeatured: true,
    });

    // Seed Testimonials
    await storage.createTestimonial({
      name: "Sarah Jenkins",
      role: "CEO",
      company: "Lumina Tech",
      content:
        "Aleric transformed our digital presence. The team is visionary and precise.",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop",
    });
    await storage.createTestimonial({
      name: "David Chen",
      role: "Founder",
      company: "Apex Group",
      content:
        "Exceptional quality and attention to detail. Highly recommended.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format&fit=crop",
    });

    console.log("Database seeded successfully.");
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express,
): Promise<Server> {
  // Seed on startup
  seedDatabase();

  // API Routes
  app.get(api.services.list.path, async (req, res) => {
    const services = await storage.getServices();
    res.json(services);
  });

  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.get(api.projects.get.path, async (req, res) => {
    const project = await storage.getProject(Number(req.params.id));
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  });

  app.get(api.testimonials.list.path, async (req, res) => {
    const testimonials = await storage.getTestimonials();
    res.json(testimonials);
  });

  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      await storage.createMessage(input);
      res
        .status(201)
        .json({ success: true, message: "Message sent successfully" });
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join("."),
        });
        return;
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
