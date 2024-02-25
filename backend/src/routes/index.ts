import * as authRouter from './auth'
import * as userRouter from './user'

const Routes: any = [
    {
        path: '/auth',
        route: authRouter.default
    },
    {
        path: '/user',
        route: userRouter.default
    }
]
export default Routes;