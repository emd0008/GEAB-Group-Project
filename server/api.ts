import * as express from "express";
import products from "./controllers/products.ctrl";

const router = express.Router();

router
    .use("/products", products);

export default router;
