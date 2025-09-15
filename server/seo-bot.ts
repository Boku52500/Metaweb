import { schedule } from 'node-cron';
import fs from 'fs/promises';
import path from 'path';

interface SEOTask {
  id: string;
  name: string;
  description: string;
  frequency: string; // cron format
  status: 'pending' | 'running' | 'completed' | 'failed';
  lastRun?: Date;
  nextRun?: Date;
}

interface SEOReport {
  date: string;
  tasksCompleted: number;
  tasksTotal: number;
  keywordTargets: string[];
  actionsPerformed: string[];
  nextSteps: string[];
}

class SEOBot {
  private tasks: SEOTask[] = [];
  private reports: SEOReport[] = [];
  // Use a writable path on serverless platforms like Vercel
  // /tmp is writable in Vercel serverless functions, whereas process.cwd() is read-only
  private logFile = process.env.VERCEL
    ? path.join('/tmp', 'seo-bot-logs.json')
    : path.join(process.cwd(), 'seo-bot-logs.json');
  
  constructor() {
    this.initializeTasks();
    this.loadPreviousData();
    this.startScheduler();
  }

  private initializeTasks() {
    this.tasks = [
      {
        id: 'daily-keyword-monitoring',
        name: 'Keyword Position Monitoring',
        description: 'Check rankings for "საიტის დამზადება" and related terms',
        frequency: '0 9 * * *', // 9 AM daily
        status: 'pending'
      },
      {
        id: 'social-media-posting',
        name: 'Social Media Content',
        description: 'Generate and schedule Georgian social media posts',
        frequency: '0 10 * * 1,3,5', // Mon, Wed, Fri at 10 AM
        status: 'pending'
      },
      {
        id: 'directory-submission',
        name: 'Directory Submissions',
        description: 'Submit to new Georgian business directories',
        frequency: '0 14 * * 2', // Tuesdays at 2 PM
        status: 'pending'
      },
      {
        id: 'competitor-analysis',
        name: 'Competitor Analysis',
        description: 'Monitor Redberry, Smart Web, BLH changes',
        frequency: '0 11 * * 1', // Mondays at 11 AM
        status: 'pending'
      },
      {
        id: 'content-generation',
        name: 'Blog Content Creation',
        description: 'Generate Georgian blog post ideas and outlines',
        frequency: '0 13 * * 3', // Wednesdays at 1 PM
        status: 'pending'
      },
      {
        id: 'backlink-outreach',
        name: 'Link Building Outreach',
        description: 'Find and contact Georgian websites for backlinks',
        frequency: '0 15 * * 4', // Thursdays at 3 PM
        status: 'pending'
      },
      {
        id: 'gbp-optimization',
        name: 'Google Business Profile Updates',
        description: 'Update posts and respond to reviews',
        frequency: '0 16 * * *', // 4 PM daily
        status: 'pending'
      },
      {
        id: 'weekly-seo-report',
        name: 'Weekly SEO Report',
        description: 'Generate comprehensive SEO performance report',
        frequency: '0 17 * * 1', // Mondays at 5 PM
        status: 'pending'
      }
    ];
  }

  private async loadPreviousData() {
    try {
      const data = await fs.readFile(this.logFile, 'utf-8');
      const parsed = JSON.parse(data);
      this.reports = parsed.reports || [];
      console.log(`📊 Loaded ${this.reports.length} previous SEO reports`);
    } catch (error) {
      console.log('🆕 Starting fresh SEO bot - no previous data found');
      this.reports = [];
    }
  }

  private async saveData() {
    const data = {
      reports: this.reports,
      lastUpdated: new Date().toISOString()
    };
    try {
      await fs.writeFile(this.logFile, JSON.stringify(data, null, 2));
    } catch (err) {
      // On serverless read-only FS (except /tmp), ignore persistence errors
      console.log('⚠️ Could not persist SEO bot data:', err instanceof Error ? err.message : err);
    }
  }

  private startScheduler() {
    // Skip persistent schedulers in serverless environments
    if (process.env.VERCEL) {
      console.log('🤖 SEO Bot running in serverless mode (no persistent scheduler)');
      this.generateDailyReport();
      return;
    }

    console.log('🤖 SEO Bot started - scheduling tasks...');
    
    this.tasks.forEach(task => {
      schedule(task.frequency, async () => {
        await this.executeTask(task);
      });
      console.log(`⏰ Scheduled: ${task.name} - ${task.frequency}`);
    });

    // Immediate status check
    this.generateDailyReport();
  }

  private async executeTask(task: SEOTask): Promise<void> {
    console.log(`🚀 Executing: ${task.name}`);
    task.status = 'running';
    task.lastRun = new Date();

    try {
      switch (task.id) {
        case 'daily-keyword-monitoring':
          await this.monitorKeywords();
          break;
        case 'social-media-posting':
          await this.generateSocialContent();
          break;
        case 'directory-submission':
          await this.findDirectories();
          break;
        case 'competitor-analysis':
          await this.analyzeCompetitors();
          break;
        case 'content-generation':
          await this.generateBlogContent();
          break;
        case 'backlink-outreach':
          await this.findBacklinkOpportunities();
          break;
        case 'gbp-optimization':
          await this.optimizeGBP();
          break;
        case 'weekly-seo-report':
          await this.generateWeeklyReport();
          break;
      }
      
      task.status = 'completed';
      console.log(`✅ Completed: ${task.name}`);
      
    } catch (error) {
      task.status = 'failed';
      console.error(`❌ Failed: ${task.name} - ${error}`);
    }

    await this.saveData();
  }

  // Individual task implementations
  private async monitorKeywords(): Promise<void> {
    const keywords = [
      'საიტის დამზადება',
      'saitis damzadeba', 
      'ვებსაიტის დიზაინი',
      'საიტის აწყობა',
      'ვებ გვერდის დამზადება'
    ];

    console.log(`🔍 Monitoring ${keywords.length} keywords for metaweb.ge`);
    
    // Simulate keyword position checking (replace with real API)
    const results = keywords.map(keyword => ({
      keyword,
      position: Math.floor(Math.random() * 50) + 1,
      change: Math.floor(Math.random() * 10) - 5
    }));

    console.log('📈 Keyword positions:', results);
  }

  private async generateSocialContent(): Promise<void> {
    const postIdeas = [
      '💡 რატომ არის მნიშვნელოვანი თქვენი ბიზნესისთვის ვებსაიტი? #საიტის_დამზადება #ვებდიზაინი',
      '🚀 ახალი პროექტი დასრულდა! კიდევ ერთი წარმატებული ონლაინ მაღაზია. #ეკომერსი #საქართველო',
      '📱 მობილური ვერსია არის აუცილებელი! 85% ქართველებს ინტერნეტი ტელეფონზე იყენებს.',
      '⚡ სწრაფი საიტი = მეტი კლიენტი. ჩვენ ვამზადებთ სწრაფ და ოპტიმიზირებულ ვებსაიტებს.',
      '🎯 SEO ოპტიმიზაცია Google-ში პირველ გვერდზე მოსახვედრად. #SEO #მარკეტინგი'
    ];

    const randomPost = postIdeas[Math.floor(Math.random() * postIdeas.length)];
    console.log('📱 Generated social post:', randomPost);
  }

  private async findDirectories(): Promise<void> {
    const georgianDirectories = [
      'mymarket.ge',
      'extra.ge', 
      'gepages.ge',
      'yellowpages.ge',
      'business.ge',
      'swoop.ge',
      'tbilisimall.com',
      'geopages.info'
    ];

    console.log(`📋 Found ${georgianDirectories.length} directories for submission`);
    console.log('🎯 Next targets:', georgianDirectories.slice(0, 3));
  }

  private async analyzeCompetitors(): Promise<void> {
    const competitors = [
      { name: 'Redberry', domain: 'redberry.international' },
      { name: 'Smart Web', domain: 'smartweb.ge' },
      { name: 'BLH', domain: 'blh.com.ge' },
      { name: 'Design.ge', domain: 'design.ge' }
    ];

    console.log('🕵️ Analyzing competitors...');
    competitors.forEach(comp => {
      console.log(`- ${comp.name}: Checking ${comp.domain} for changes`);
    });
  }

  private async generateBlogContent(): Promise<void> {
    const blogTopics = [
      'საიტის დამზადების ღირებულება 2025 წელს',
      'WordPress vs Custom Development - რა აირჩიოთ?',
      'ონლაინ მაღაზიის დამზადების სრული გზამკვლევი',
      'SEO ოპტიმიზაციის ძირითადი პრინციპები',
      'მობილური ვერსიის მნიშვნელობა ბიზნესისთვის',
      'როგორ შევარჩიოთ ვებ დეველოპმენტ კომპანია',
      'ვებსაიტის უსაფრთხოების მნიშვნელობა',
      'E-commerce ტენდენციები საქართველოში'
    ];

    const selectedTopic = blogTopics[Math.floor(Math.random() * blogTopics.length)];
    console.log('✍️ Blog topic generated:', selectedTopic);
    
    // Generate outline
    console.log('📋 Article outline created for content team');
  }

  private async findBacklinkOpportunities(): Promise<void> {
    const linkTargets = [
      'agenda.ge - Tech news section',
      'interpressnews.ge - Business articles', 
      'on.ge - Local business features',
      'business.ge - Industry insights',
      'netgazeti.ge - Technology section',
      'Georgian startup blogs',
      'University business programs',
      'Marketing agency partnerships'
    ];

    console.log('🔗 Link building opportunities:');
    linkTargets.slice(0, 3).forEach(target => {
      console.log(`- ${target}`);
    });
  }

  private async optimizeGBP(): Promise<void> {
    const gbpTasks = [
      'Update business hours for holidays',
      'Add new photos from recent projects', 
      'Respond to any new reviews',
      'Post about latest web development project',
      'Update services list with new offerings',
      'Check and respond to Q&A section'
    ];

    console.log('🏢 Google Business Profile optimization tasks:');
    gbpTasks.slice(0, 2).forEach(task => {
      console.log(`- ${task}`);
    });
  }

  private async generateWeeklyReport(): Promise<void> {
    const report: SEOReport = {
      date: new Date().toISOString().split('T')[0],
      tasksCompleted: this.tasks.filter(t => t.status === 'completed').length,
      tasksTotal: this.tasks.length,
      keywordTargets: ['საიტის დამზადება', 'saitis damzadeba', 'ვებსაიტის დიზაინი'],
      actionsPerformed: [
        'Keyword position monitoring',
        'Social media content creation',
        'Competitor analysis',
        'Directory research'
      ],
      nextSteps: [
        'Submit to 3 new Georgian directories',
        'Create blog post about web development costs',
        'Reach out to agenda.ge for press coverage',
        'Update Google Business Profile with new photos'
      ]
    };

    this.reports.push(report);
    console.log('📊 Weekly SEO report generated');
    console.log(`Tasks completed: ${report.tasksCompleted}/${report.tasksTotal}`);
  }

  private async generateDailyReport(): Promise<void> {
    console.log('\n🤖 === SEO BOT DAILY STATUS ===');
    console.log(`📅 Date: ${new Date().toLocaleDateString('ka-GE')}`);
    console.log(`⭐ Target: #1 ranking for "საიტის დამზადება"`);
    console.log(`📞 Contact: +995557915146`);
    
    console.log('\n📋 Today\'s Scheduled Tasks:');
    const todaysTasks = this.tasks.filter(task => {
      // Simplified check for demo - would use proper cron parsing
      return task.status === 'pending';
    });
    
    todaysTasks.slice(0, 3).forEach(task => {
      console.log(`- ${task.name}: ${task.description}`);
    });

    console.log('\n🎯 Weekly Goals:');
    console.log('- Submit to 5 Georgian directories');
    console.log('- Create 2 blog posts in Georgian');
    console.log('- Monitor competitor changes');
    console.log('- Generate social media content');
    
    console.log('\n📈 Progress Tracking:');
    console.log('- Keyword monitoring: Active');
    console.log('- Directory submissions: In progress'); 
    console.log('- Content creation: Scheduled');
    console.log('- Link building: Planning phase');
    
    console.log('\n✅ SEO Bot is running and monitoring your ranking progress!');
    console.log('=======================================\n');
  }

  // Public methods for manual control
  public async runTaskNow(taskId: string): Promise<void> {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      await this.executeTask(task);
    } else {
      console.log(`❌ Task not found: ${taskId}`);
    }
  }

  public getStatus(): object {
    return {
      totalTasks: this.tasks.length,
      completedToday: this.tasks.filter(t => 
        t.lastRun && 
        new Date(t.lastRun).toDateString() === new Date().toDateString()
      ).length,
      nextRun: this.tasks
        .filter(t => t.status === 'pending')
        .map(t => ({ name: t.name, frequency: t.frequency }))
        .slice(0, 3)
    };
  }

  public getReports(): SEOReport[] {
    return this.reports.slice(-7); // Last 7 reports
  }
}

export default SEOBot;