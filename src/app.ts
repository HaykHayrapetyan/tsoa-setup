import express, { json, NextFunction, Request, Response, urlencoded } from "express";
import { RegisterRoutes } from "../.tsoa/routes.js";
import swaggerUI from "swagger-ui-express";
import swaggerJson from "../.tsoa/swagger.json" assert { type: "json" };
import { NotFoundError, ValidationError } from "./errors/errors.js";

export const app = express();

// Use body parser to read sent json payloads
app.use(
  urlencoded({
    extended: true,
  }),
);
app.use(json());

RegisterRoutes(app);

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerJson));

app.get("/", (_, res) => {
  res.json("Welcome to your Tsoa-Express-Swagger app");
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof NotFoundError) {
    return res.status(404).json({ message: err.message });
  }
  if (err instanceof ValidationError) {
    return res.status(400).json({ message: err.message });
  }
  // Default to 500
  console.error(err);
  return res.status(500).json({ message: "Internal Server Error" });
});
