import type { VercelRequest, VercelResponse } from '@vercel/node';
import { submissionsHandler } from '../../server/routes/contact';

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  return submissionsHandler(_req as any, res as any);
}
