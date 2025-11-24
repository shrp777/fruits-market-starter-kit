import type { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { AppDataSource } from "../../database/data-source";
import { Product } from "../../entities/Product";

export default async function GetAllProducts(c: Context) {
  try {
    const productRepository = AppDataSource.getRepository(Product);
    const products = await productRepository.find();

    return c.json(
      {
        success: true,
        data: products
      },
      200
    );
  } catch (error) {
    if (error instanceof HTTPException) {
      throw error;
    }
    throw new HTTPException(500, { message: "Failed to fetch products" });
  }
}
