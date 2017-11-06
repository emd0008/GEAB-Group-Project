import * as express from "express";
import products from "./controllers/products.ctrl";
import contact from "./controllers/contact.ctrl";
import payment from "./controllers/payment.ctrl";

const router = express.Router();

router
  .use("/products", products)
  .use("/contactform", contact)
  .use("/payment", payment)
  //.use("/users", users);

export default router;
