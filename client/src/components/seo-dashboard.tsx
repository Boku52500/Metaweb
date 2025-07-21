import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Activity, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Bot,
  Target,
  BarChart3,
  Calendar,
  Play,
  Pause
} from "lucide-react";

interface SEOBotStatus {
  status: string;
  botActive: boolean;
  totalTasks: number;
  completedToday: number;
  nextRun: Array<{ name: string; frequency: string }>;
  lastUpdated: string;
}

interface SEOTask {
  id: string;
  name: string;
  description: string;
  frequency: string;
}

interface SEOReport {
  date: string;
  tasksCompleted: number;
  tasksTotal: number;
  keywordTargets: string[];
  actionsPerformed: string[];
  nextSteps: string[];
}

export default function SEODashboard() {
  const [botStatus, setBotStatus] = useState<SEOBotStatus | null>(null);
  const [tasks, setTasks] = useState<SEOTask[]>([]);
  const [reports, setReports] = useState<SEOReport[]>([]);
  const [loading, setLoading] = useState(true);
  const [runningTask, setRunningTask] = useState<string | null>(null);

  useEffect(() => {
    fetchDashboardData();
    // Refresh every 30 seconds
    const interval = setInterval(fetchDashboardData, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [statusRes, tasksRes, reportsRes] = await Promise.all([
        fetch('/api/seo-bot/status'),
        fetch('/api/seo-bot/tasks'),
        fetch('/api/seo-bot/reports')
      ]);

      if (statusRes.ok) {
        const statusData = await statusRes.json();
        setBotStatus(statusData);
      }

      if (tasksRes.ok) {
        const tasksData = await tasksRes.json();
        setTasks(tasksData.tasks);
      }

      if (reportsRes.ok) {
        const reportsData = await reportsRes.json();
        setReports(reportsData.reports);
      }
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const runTask = async (taskId: string) => {
    setRunningTask(taskId);
    try {
      const response = await fetch('/api/seo-bot/run-task', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ taskId })
      });

      if (response.ok) {
        await fetchDashboardData(); // Refresh data
      }
    } catch (error) {
      console.error('Failed to run task:', error);
    } finally {
      setRunningTask(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12">
            <Bot className="w-16 h-16 mx-auto mb-4 text-blue-600 animate-pulse" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Loading SEO Bot Dashboard...</h2>
            <p className="text-gray-600">Getting your ranking automation status</p>
          </div>
        </div>
      </div>
    );
  }

  const completionRate = botStatus ? (botStatus.completedToday / botStatus.totalTasks) * 100 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Bot className="w-10 h-10 text-blue-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">SEO Automation Dashboard</h1>
              <p className="text-gray-600">Automated ranking system for "საიტის დამზადება"</p>
            </div>
            <div className="ml-auto">
              <Badge variant={botStatus?.botActive ? "default" : "secondary"} className="text-lg px-4 py-2">
                {botStatus?.botActive ? "🟢 Active" : "🔴 Inactive"}
              </Badge>
            </div>
          </div>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Bot Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Activity className={`w-8 h-8 ${botStatus?.botActive ? 'text-green-600' : 'text-red-600'}`} />
                <div>
                  <p className="text-2xl font-bold">{botStatus?.botActive ? 'Running' : 'Stopped'}</p>
                  <p className="text-sm text-gray-500">Automation Status</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Today's Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="text-2xl font-bold">{botStatus?.completedToday || 0}/{botStatus?.totalTasks || 0}</p>
                  <p className="text-sm text-gray-500">Tasks Completed</p>
                </div>
              </div>
              <Progress value={completionRate} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Target Keywords</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Target className="w-8 h-8 text-purple-600" />
                <div>
                  <p className="text-2xl font-bold">5</p>
                  <p className="text-sm text-gray-500">Keywords Tracked</p>
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-600">
                საიტის დამზადება, saitis damzadeba...
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Goal Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-8 h-8 text-green-600" />
                <div>
                  <p className="text-2xl font-bold">#1</p>
                  <p className="text-sm text-gray-500">Ranking Target</p>
                </div>
              </div>
              <div className="mt-2 text-xs text-green-600 font-medium">
                6-8 months timeline
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="tasks" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tasks">Automated Tasks</TabsTrigger>
            <TabsTrigger value="reports">SEO Reports</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Tasks Tab */}
          <TabsContent value="tasks">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Daily Automation Tasks</CardTitle>
                  <CardDescription>
                    Tasks running automatically to improve your Google ranking
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tasks.map((task) => (
                      <div key={task.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <h3 className="font-semibold">{task.name}</h3>
                          <p className="text-sm text-gray-600 mb-1">{task.description}</p>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Clock className="w-3 h-3" />
                            {task.frequency}
                          </div>
                        </div>
                        <Button
                          size="sm"
                          onClick={() => runTask(task.id)}
                          disabled={runningTask === task.id}
                        >
                          {runningTask === task.id ? (
                            <>
                              <AlertCircle className="w-4 h-4 mr-2 animate-spin" />
                              Running...
                            </>
                          ) : (
                            <>
                              <Play className="w-4 h-4 mr-2" />
                              Run Now
                            </>
                          )}
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Next Scheduled Tasks */}
              {botStatus?.nextRun && botStatus.nextRun.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Next Scheduled Tasks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {botStatus.nextRun.map((task, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                          <Calendar className="w-5 h-5 text-blue-600" />
                          <div>
                            <p className="font-medium">{task.name}</p>
                            <p className="text-sm text-gray-600">{task.frequency}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>SEO Performance Reports</CardTitle>
                <CardDescription>
                  Weekly automated reports tracking your ranking progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                {reports.length > 0 ? (
                  <div className="space-y-6">
                    {reports.slice(-3).reverse().map((report, index) => (
                      <div key={index} className="border rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold">Week of {report.date}</h3>
                          <Badge variant="outline">
                            {report.tasksCompleted}/{report.tasksTotal} tasks
                          </Badge>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium mb-2">Actions Performed</h4>
                            <ul className="space-y-1 text-sm">
                              {report.actionsPerformed.map((action, i) => (
                                <li key={i} className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-600" />
                                  {action}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-medium mb-2">Next Steps</h4>
                            <ul className="space-y-1 text-sm">
                              {report.nextSteps.map((step, i) => (
                                <li key={i} className="flex items-center gap-2">
                                  <Clock className="w-4 h-4 text-blue-600" />
                                  {step}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <BarChart3 className="w-12 h-12 mx-auto text-gray-400 mb-3" />
                    <p className="text-gray-600">No reports generated yet</p>
                    <p className="text-sm text-gray-500">Reports will appear here as the bot runs</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ranking Progress</CardTitle>
                  <CardDescription>
                    Track your progress toward #1 ranking for Georgian keywords
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {['საიტის დამზადება', 'saitis damzadeba', 'ვებსაიტის დიზაინი'].map((keyword) => (
                        <div key={keyword} className="p-4 border rounded-lg">
                          <h4 className="font-medium mb-2">{keyword}</h4>
                          <div className="text-2xl font-bold text-orange-600 mb-1">Position: ~25</div>
                          <div className="text-sm text-gray-600">Target: #1 (6-8 months)</div>
                          <Progress value={25} className="mt-2" />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Automation Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">24/7</div>
                      <div className="text-sm text-gray-600">Monitoring</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">15+</div>
                      <div className="text-sm text-gray-600">Hours/week saved</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">100%</div>
                      <div className="text-sm text-gray-600">Consistency</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-600">8</div>
                      <div className="text-sm text-gray-600">Tasks automated</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>SEO Bot running 24/7 to achieve #1 ranking for "საიტის დამზადება"</p>
          <p>Last updated: {botStatus?.lastUpdated ? new Date(botStatus.lastUpdated).toLocaleString('ka-GE') : 'Never'}</p>
        </div>
      </div>
    </div>
  );
}