import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import type { Express } from "express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Assignment API",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.ts"], 
};

const swaggerSpec = swaggerJsdoc(options);

export default function swaggerDocs(app: Express) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
