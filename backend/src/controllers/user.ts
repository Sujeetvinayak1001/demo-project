import * as userService from "../services/user";

export const create = async (req: any, res: any, next: any) => {
    try {
        
        await userService.create(req, res);
        next()
    } catch (error) {
        throw error;
    }
}

export const get = async (req: any, res: any, next: any) => {
    try {
        
        await userService.get(req, res);
        next()
    } catch (error) {
        next(error);       
    }
}

export const update = async (req: any, res: any, next: any) => {
    try {
        
        await userService.update(req, res);
        next()
    } catch (error) {
        next(error);      
    }
}

export const remove = async (req: any, res: any, next: any) => {
    try {
        
        await userService.remove(req, res);
        next()
    } catch (error) {
        next(error);      
    }
}