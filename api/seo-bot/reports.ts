import SEOBot from "../../server/seo-bot";

let bot: SEOBot | null = null;
function getBot() {
  if (!bot) bot = new SEOBot();
  return bot;
}

export default async function handler(req: any, res: any) {
  try {
    const b = getBot();
    const reports = b.getReports();
    res.status(200).json({ reports, totalReports: reports.length });
  } catch (err: any) {
    res.status(500).json({ error: "SEO Bot not initialized", details: err?.message });
  }
}
