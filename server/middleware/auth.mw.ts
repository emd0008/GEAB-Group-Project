import { Request, Response, NextFunction } from "express";

export function isLoggedIn(req: Request, res: Response, next: NextFunction) {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
}
<<<<<<< HEAD
export function isAdmin(req: Request, res: Response, next: NextFunction) {
  if (req.user.role === 'admin') {
    next();
  }else {

  
  res.sendStatus(403);
}
=======

export function isAdmin(req: Request, res: Response, next: NextFunction){
  if(req.user.role === 'admin'){
    next();
  }else{
    res.sendStatus(403);
  }
>>>>>>> 2643d3daf5fa9a6ea8526fc6e77e9cb5b4706b7d
}
