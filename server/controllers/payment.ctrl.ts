import * as express from 'express';
import * as stripeSvc from "../services/stripe.svc";

const router = express.Router();

router.post('/', (req, res) => {
    let amount = Number(req.body.amount);
    stripeSvc.charge(req.body.token, amount)
    .then((success) => {
        res.sendStatus(204);
    }, (err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

export default router;