import { Router } from "express";
import prisma from "../config/prisma.js";

const router = Router();

/**
 * @swagger
 * /api/health/db-check:
 *   get:
 *     summary: Check database connection
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Database connected
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Database connected ✅
 *       500:
 *         description: Database connection failed
 */
router.get("/db-check", async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ success: true, message: "Database connected ✅" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Database connection failed ❌" });
  }
});


export default router;
