import SEOBot from "../../server/seo-bot";

let bot: SEOBot | null = null;
function getBot() {
  if (!bot) bot = new SEOBot();
  return bot;
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const { taskId } = req.body || {};
    if (!taskId) {
      res.status(400).json({ error: 'Task ID is required' });
      return;
    }
    const b = getBot();
    await b.runTaskNow(taskId);
    res.status(200).json({ success: true, message: `Task ${taskId} executed successfully` });
  } catch (err: any) {
    res.status(500).json({ error: `Failed to run task: ${err?.message || err}` });
  }
}
