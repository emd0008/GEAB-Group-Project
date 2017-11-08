import * as express from "express";
import * as passport from "passport";
import * as session from "express-session";
let MySQLStore = require('express-mysql-session') (session);
import {Strategy as LocalStrategy } from 'passport-local';
import * as userProc from '../procedures/users.proc';
import {pool} from './db';
import * as utils from '../utils';

export default function configurePassport(app: express.Express) {
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },(email, password, done) => {
        let loginError ='Invalid Login Credentials';
        userProc.readByEmail (email).then((user) => {
            if (!user) {
                    return done(null, false, { message: loginError });
            }
            return utils.checkPassword(password, user.password)
              .then((matches) => {
                  if(matches) {
                      delete user.password;
                      return done(null, user);
                  } else {
                    return done (null, false, { message: loginError});
                  }
              });
        }).catch((err)  => {
            return done(err);
        });
    
    }));
    
  passport.serializeUser((user: models.IUser, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id: number, done) => {
    userProc.read(id).then(
      user => {
        done(null, user);
      },
      err => {
        done(err);
      }
    );
  });

  let sessionStore = new MySQLStore(
    {
      createDatabaseTable: true
    },
    pool
  );

  app.use(
    session({
      secret: "dgpuueFmsoEq",
      store: sessionStore,
      resave: false,
      saveUninitialized: false
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
}
