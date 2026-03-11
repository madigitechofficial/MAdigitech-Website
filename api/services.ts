// api/services.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { client } from "./db";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // Query your services table
    const result = await client.query("SELECT * FROM services"); // replace 'services' with your actual table name
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch services" });
  }
}