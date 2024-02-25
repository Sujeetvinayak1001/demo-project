import { User } from "../models/user";


export const createUser = async (user: any) => {
    return await User.create(user)
}

export const getUser = async (filter: any) => {
    filter = (!filter) ? {} : filter;
    return await User.findOne(filter).exec()
}

export const getUsers = async (filter: any) => {
    filter = (!filter) ? {} : filter;
    return await User.find(filter)
}

export const updateUser = async (filter: any, data: any) => {
    filter = (!filter) ? {} : filter;
    return await User.updateOne(filter, data).exec()
}

export const deleteUser = async (filter: any) => {
    filter = (!filter) ? {} : filter;
    return await User.deleteOne(filter)
}
