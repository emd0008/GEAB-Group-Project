import { Router } from "express";
import { sendEmail } from "../services/email.svc";

const router = Router();

//actually api/contact
router.post("/", (req, res) => {
  sendEmail(req.body.from, req.body.subject, req.body.message)
    .then((response: any) => {
      res.sendStatus(201);
    })
    .catch((e: any) => {
      console.log(e.response.body.errors);
      res.sendStatus(500);
    });
});

export default router;
