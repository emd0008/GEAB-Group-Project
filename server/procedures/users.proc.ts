import {row, rows, empty} from '../config/db';

export function createUser(firstName: string, lastName: string, email: string, hash: string):Promise <models.IUser>{
    return row('CreateUser', [firstName, lastName, email, hash]);
}

export function readByEmail(email:string):Promise <models.IUser>{ 
    return row ('GetUserByEmail', [email]);
} 

export function all(): Promise<Array<models.IUser>> {
    return rows('GetUsers');
}

export function read(id: number): Promise<models.IUser> {
    return row('GetUser', [id]);
}

export function create(email: string, hash: string, firstName: string, lastName: string) {
    return row('InsertUser', [firstName, lastName, email, hash]);
}