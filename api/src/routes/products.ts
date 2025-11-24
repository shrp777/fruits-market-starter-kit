import { Hono } from "hono";
import GetAllProducts from "../handlers/products/GetAllProducts";

const router = new Hono();

router.get("/", GetAllProducts);

export default router;
