export default async function handler(_req: any, res: any) {
  // In serverless mode, no persistent scheduler is running. Mirror existing response.
  res.status(200).json({
    success: true,
    message: "SEO Bot paused. Manual restart required."
  });
}
