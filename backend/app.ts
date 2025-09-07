import express, { type Request, type Response, type NextFunction, type Express } from "express";
import dotenv from "dotenv";
import { setupLogger } from "./middleware/logger.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import healthRoutes from "./routes/health.routes.js";
import swaggerDocs from "./config/swagger.js";

dotenv.config();

const app: Express = express();
app.use(express.json());
setupLogger(app);

swaggerDocs(app);

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/health", healthRoutes);

app.get("/", (req: Request, res: Response) => {
    res.json({ success: true, message: "API is running " });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error("Error:", err.message);
    res.status(500).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
});

export default app;
