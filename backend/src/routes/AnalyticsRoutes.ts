import express, { Request, Response } from "express";
import AnalyticsController from "../controllers/AnalyticsController";

const analyticsRoutes = express.Router();
const analyticsController = new AnalyticsController();

analyticsRoutes.put(
  '/analytics/:userid',
  async (req: Request, res: Response) => {
    await analyticsController.createOrUpdateDay(req, res);
  }
);

analyticsRoutes.get('/analytics/:userid/month', async (req: Request, res: Response) => {
  try {
    await analyticsController.getMonthAnalytics(req, res);
  } catch (error) {
    console.error('Error getting month analytics:', error);
    res.status(500).send('Error getting month analytics');
  }
});

export default analyticsRoutes;
