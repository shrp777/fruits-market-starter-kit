import type { Context } from "hono";
import { HTTPException } from "hono/http-exception";

export default async function GetRecommandations(c: Context) {
  try {
    const api = process.env.API_RECOMMENDATION;

    const response = await fetch(api + "/recommendations");

    const result = await response.json();

    return c.json(
      {
        success: true,
        data: result
      },
      200
    );
  } catch (error) {
    console.error(error);
    if (error instanceof HTTPException) {
      throw error;
    }
    throw new HTTPException(500, { message: "Failed to fetch products" });
  }
}
