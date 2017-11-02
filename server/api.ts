import * as express from "express";
import products from "./controllers/products.ctrl";
import contact from "./controllers/contact.ctrl";

const router = express.Router();

router.use("/products", products).use("/contactform", contact);

export default router;
