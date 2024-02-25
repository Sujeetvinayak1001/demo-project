import * as userRepository from "../repository/user";
import * as bcrypt from 'bcrypt';
import { User } from '../models/user'

export const login = async (req: any, res: any) => {
    console.log(req.body);
    const existingUser: any = await userRepository.getUser({ email: req.body.email })
    if (existingUser && req.body && req.body.password) {
        if (await bcrypt.compare(req.body.password, existingUser.password)) {
            req.response.data = existingUser;
            req.response.message = "User logged in successfully."
        }
        else
            req.response.message = "Wrong User credentials.."
    }
    else
        req.response.message = "User does not exists."

    return req
}

export async function signup(req: any, res: any) {
    console.log(req.body);
    if (!req.body) throw Error("Bad request")
    req.body.password = await bcrypt.hash(req.body.password, 10)
    const data = await userRepository.createUser(req.body)
    req.response.message = (data) ? "User created successfully" : "User creation failed."
    req.response.data = data;

    return req
}
export function resetPassword(req: any, res: any) {
    console.log(req.body);

    return true
}

