import * as express from 'express';
import * as passport from 'passport';
import * as procedures from '../procedures/users.proc';
import * as auth from '../middleware/auth.mw';
import * as utils from '../utils';

let router = express.Router();


router.post('/login', (req, res, next) => {
    // In here, it's our job to kick off authentication
    passport.authenticate('local', (err: any, user: models.IUser, info: any) => {
        if (err) { // There was some kind of db error
            console.log(err);
            return res.sendStatus(500);
        }
        if (!user) { // Invalid login attempt
            return res.sendStatus(401);
        }
        // Valid login, tell Passport to set req.user
        req.logIn(user, (err) => {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            } else {
                delete user.password;
                return res.send(user);
            }
        });
    })(req, res, next);
});

router.all('*', auth.isLoggedIn);
// router.get('*', auth.isLoggedIn);
// router.post('*', auth.isLoggedIn);
// router.put('*', auth.isLoggedIn);
// router.delete('*', auth.isLoggedIn);

router.get('/logout', (req, res) => { // actually /api/users/logout
    if (req.session) {
        req.session.destroy(() => {
            req.logOut();
            res.sendStatus(204);
        });
    }
});

router
    .route('/') // actually /api/users/
        .get(auth.isAdmin, (req, res) => {
            procedures.all()
            .then((users) => {
                res.send(users);
            }).catch((err) => {
                console.log(err);
                res.sendStatus(500);
            });
        })
        .post(auth.isAdmin, (req, res) => {
            let u = req.body; // The incoming POST request data (e.g. the new user being created)
            utils.encryptPassword(u.password)
            .then((hash) => {
                return procedures.create(u.email, hash, u.firstname, u.lastname);
            }).then((id) => {
                res.status(201).send(id);
            }).catch((e) => {
                console.log(e);
                res.sendStatus(500);
            });
        });


router.get('/me', (req, res) => {
    res.send(req.user);
});

router
    .route('/:id') // actually /api/users/:id
        .get(auth.isAdmin, (req, res) => {
            procedures.read(req.params.id)
            .then((user) => {
                res.send(user);
            }).catch((err) => {
                console.log(err);
                res.sendStatus(500);
            });
        });



export default router;
