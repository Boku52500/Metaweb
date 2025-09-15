import SEOBot from "../../server/seo-bot";

let bot: SEOBot | null = null;
function getBot() {
  if (!bot) bot = new SEOBot();
  return bot;
}

export default async function handler(_req: any, res: any) {
  // Mirror server/routes/seo-bot.ts tasks response
  const tasks = [
    {
      id: 'daily-keyword-monitoring',
      name: 'Keyword Position Monitoring',
      description: 'Check rankings for "საიტის დამზადება" and related terms',
      frequency: 'Daily at 9 AM'
    },
    {
      id: 'social-media-posting',
      name: 'Social Media Content',
      description: 'Generate Georgian social media posts',
      frequency: 'Mon, Wed, Fri at 10 AM'
    },
    {
      id: 'directory-submission',
      name: 'Directory Submissions',
      description: 'Find new Georgian business directories',
      frequency: 'Tuesdays at 2 PM'
    },
    {
      id: 'competitor-analysis',
      name: 'Competitor Analysis',
      description: 'Monitor Redberry, Smart Web, BLH changes',
      frequency: 'Mondays at 11 AM'
    },
    {
      id: 'content-generation',
      name: 'Blog Content Creation',
      description: 'Generate Georgian blog post ideas',
      frequency: 'Wednesdays at 1 PM'
    },
    {
      id: 'backlink-outreach',
      name: 'Link Building Outreach',
      description: 'Find backlink opportunities',
      frequency: 'Thursdays at 3 PM'
    },
    {
      id: 'gbp-optimization',
      name: 'Google Business Profile Updates',
      description: 'Update posts and respond to reviews',
      frequency: 'Daily at 4 PM'
    },
    {
      id: 'weekly-seo-report',
      name: 'Weekly SEO Report',
      description: 'Generate performance report',
      frequency: 'Mondays at 5 PM'
    }
  ];

  res.status(200).json({ tasks });
}
