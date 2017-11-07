import * as bcrypt from 'bcrypt';
const SALT_ROUNDS = 12;

<<<<<<< HEAD
export function encryptPassword(pw: string): Promise<string> {
    return bcrypt.hash(pw, SALT_ROUNDS);
}

export function checkPassword(pw: string, hash: string): Promise<boolean> {
=======
export function encryptPassword(pw: string): Promise<string>{
    return bcrypt.hash(pw, SALT_ROUNDS);
}

export function checkPassword(pw: string, hash:string): Promise<boolean>{
>>>>>>> 2643d3daf5fa9a6ea8526fc6e77e9cb5b4706b7d
    return bcrypt.compare(pw, hash);
}