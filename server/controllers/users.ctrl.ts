import * as express from 'express';
import * as procedures from '../procedures/users.proc';

let router = express.Router();

router.get('/', (req, res) => {
    procedures.all()
    .then((users) => {
        res.send(users);
    }, (err) => {
    
        res.status(500).send(err);
    });
    });
    export default router;
