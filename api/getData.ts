import { client } from './db';

export default async function handler(req: any, res: any) {
  try {
    const { rows } = await client.query('SELECT * FROM my_table'); // replace with your table
    res.status(200).json(rows);
  } catch (err) {
    console.error('DB Query Failed:', err);
    res.status(500).json({ error: 'Database query failed' });
  }
}