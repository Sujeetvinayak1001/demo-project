import * as authService from "../services/auth";

export const login = async (req: any, res: any, next: any) => {
    try {
        
        await authService.login(req, res);
        next()
    } catch (error) {
        next(error);
    }
}

export const signup = async (req: any, res: any, next: any) => {
    try {
        
        await authService.signup(req, res);
        next()
    } catch (error) {
        next(error);     
    }
}

export const resetPassword = async (req: any, res: any, next: any) => {
    try {
        
        await authService.resetPassword(req, res);
        next()
    } catch (error) {
        next(error);      
    }
}