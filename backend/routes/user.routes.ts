import { Router } from "express";
import { authenticate } from "../middleware/auth.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management APIs
 */

/**
 * @swagger
 * /api/users/profile:
 *   get:
 *     summary: Get the authenticated user's profile
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []   # 🔑 Tells Swagger this route needs JWT in Authorization header
 *     responses:
 *       200:
 *         description: Successfully retrieved user profile
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 user:
 *                   type: object
 *                   example:
 *                     id: 1
 *                     email: user@example.com
 *       401:
 *         description: Unauthorized (missing or invalid token)
 */
router.get("/profile", authenticate, (req, res) => {
  res.json({ success: true, user: (req as any).user });
});


export default router;
