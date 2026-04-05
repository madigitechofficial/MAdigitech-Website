import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql } from "./db";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const projects = await sql`SELECT * FROM projects`;
    res.status(200).json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch projects" });
  }
}