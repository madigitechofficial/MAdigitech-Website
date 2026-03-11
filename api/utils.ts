export function sendError(res: any, message: string) {
  res.status(500).json({ error: message });
}