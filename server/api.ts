import * as express from "express";
import products from "./controllers/products.ctrl";
import contact from "./controllers/contact.ctrl";
import payment from "./controllers/payment.ctrl";

const router = express.Router();

router
<<<<<<< HEAD
.use("/products", products)
.use("/contactform", contact)
.use("/payment", payment);
=======
  .use("/products", products)
  .use("/contactform", contact)
  .use("/payment", payment);
>>>>>>> 6fdfc689edb574ef1bef9ee3e3bc4d4aa06b8db4

export default router;
