import { submitHandler } from '../../server/routes/contact';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  // Ensure req.body exists (Vercel typically parses JSON for us when Content-Type is application/json)
  if (typeof req.body === 'string') {
    try { req.body = JSON.parse(req.body); } catch {} // best-effort
  }

  return submitHandler(req as any, res as any);
}
