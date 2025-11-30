import { Hono } from "hono";
import GetAllProducts from "../handlers/products/GetAllProducts";
import GetRecommandations from "../handlers/products/GetRecommendations";

const router = new Hono();

router.get("/recommendations", GetRecommandations);
router.get("/", GetAllProducts);

export default router;
