import * as userRepository from "../repository/user";
import * as bcrypt from 'bcrypt';

export const authUser = async (user: any, done: any) => {
    //Search the user, password in the DB to authenticate the user
    //Let's assume that a search within your DB returned the username and password match for "Kyle".
    const authenticated_user:any = await userRepository.getUser({ email: user.email })
    if (authenticated_user && user.password) {
        if (await bcrypt.compare(user.password, authenticated_user.password)) {
            return done(null, authenticated_user)
        }
    }

    return done(null, false)
}