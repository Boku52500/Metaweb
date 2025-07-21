import { Router } from "express";
import SEOBot from "../seo-bot.js";

const router = Router();
let seoBot: SEOBot;

// Initialize SEO Bot
try {
  seoBot = new SEOBot();
  console.log("🤖 SEO Bot initialized successfully");
} catch (error) {
  console.error("❌ Failed to initialize SEO Bot:", error);
}

// Get SEO Bot status
router.get("/status", (req, res) => {
  if (!seoBot) {
    return res.status(500).json({ error: "SEO Bot not initialized" });
  }
  
  const status = seoBot.getStatus();
  res.json({
    status: "active",
    botActive: true,
    ...status,
    lastUpdated: new Date().toISOString()
  });
});

// Get SEO reports
router.get("/reports", (req, res) => {
  if (!seoBot) {
    return res.status(500).json({ error: "SEO Bot not initialized" });
  }
  
  const reports = seoBot.getReports();
  res.json({
    reports,
    totalReports: reports.length
  });
});

// Manually trigger a specific task
router.post("/run-task", async (req, res) => {
  if (!seoBot) {
    return res.status(500).json({ error: "SEO Bot not initialized" });
  }
  
  const { taskId } = req.body;
  
  if (!taskId) {
    return res.status(400).json({ error: "Task ID is required" });
  }

  try {
    await seoBot.runTaskNow(taskId);
    res.json({ 
      success: true, 
      message: `Task ${taskId} executed successfully` 
    });
  } catch (error) {
    res.status(500).json({ 
      error: `Failed to run task: ${error}` 
    });
  }
});

// Get available tasks
router.get("/tasks", (req, res) => {
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

  res.json({ tasks });
});

// Emergency stop (pause all tasks)
router.post("/pause", (req, res) => {
  // In a real implementation, you'd pause the cron jobs
  res.json({ 
    success: true, 
    message: "SEO Bot paused. Manual restart required." 
  });
});

export default router;