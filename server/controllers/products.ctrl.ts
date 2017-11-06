import * as express from 'express';
import * as procedures from '../procedures/products.proc';

let router = express.Router();

router.route("/subcategory/:SubCatID").get((req, res) => {
    procedures.productsBySubCat(req.params.SubCatID)
    .then(products => {
        res.send(products);
    })
    .catch(err => {
        res.sendStatus(500);
    });
});

router.route("/:id").get((req, res) => {
    procedures.read(req.params.id)
    .then(product => {
        res.send(product);
    })
    .catch(err => {
        console.log(err);
        res.sendStatus(500);
    });
});

export default router;