// api/db.ts
import { Client } from "@neondatabase/serverless";

export const client = new Client({
  connectionString: process.env.NEON_DB_URL, // Make sure this exists in Vercel
});