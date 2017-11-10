import * as express from "express";
import products from "./controllers/products.ctrl";
import contact from "./controllers/contact.ctrl";
import payment from "./controllers/payments.ctrl";
import users from "./controllers/users.ctrl";

const router = express.Router();

router
  .use("/products", products)
  .use("/contactform", contact)
  .use("/payments", payment)
  .use("/users", users);

export default router;
