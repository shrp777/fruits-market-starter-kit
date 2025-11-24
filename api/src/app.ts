import "reflect-metadata";

import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import type { ContentfulStatusCode } from "hono/utils/http-status";

import { cors } from "hono/cors";
import { logger as honoLogger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import { secureHeaders } from "hono/secure-headers";
import { trimTrailingSlash } from "hono/trailing-slash";
import productsRouter from "./routes/products";

const app = new Hono();

// Middlewares
app.use("*", honoLogger());
app.use(
  "*",
  secureHeaders({
    crossOriginResourcePolicy: "cross-origin"
  })
);
app.use("*", prettyJSON());
app.use(
  "*",
  cors({
    origin: "*",
    allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    credentials: true
  })
);
app.use("*", trimTrailingSlash());

app.get("/", async (c) => {
  return c.json({ success: true, message: `Fruits Market API` }, 200);
});

app.get("/health", async (c) => {
  return c.json(
    {
      success: true,
      status: "healthy",
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
      uptime: Math.floor(process.uptime()) + "s"
    },
    200
  );
});

// Routes
app.route("/products", productsRouter);

//gestion des erreurs 404
app.notFound((c) => {
  return c.json(
    {
      success: false,
      error: "Not Found",
      message: "Route not found",
      timestamp: new Date().toISOString()
    },
    404
  );
});

app.onError((error: Error, c) => {
  if (error instanceof HTTPException) {
    return c.json(
      { success: false, message: error.message ?? "An error has occurred" },
      error.getResponse().status as ContentfulStatusCode
    );
  }
  return c.json({ success: false, message: "An error has occurred" }, 500);
});

export default app;
