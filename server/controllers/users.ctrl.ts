import * as express from 'express';
import * as procedures from '../procedures/users.proc';
import * as auth from '../middleware/auth.mw';

let router = express.Router();

router.get('/', (req, res) => {
    procedures.all()
    .then((users) => {
        res.send(users);
    }, (err) => {
    
        res.status(500).send(err);
    });
});
router.get('/', auth.isLoggedIn, (req, res) => {

});
export default router;
