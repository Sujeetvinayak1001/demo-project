import * as userRepository from "../repository/user";

export const get = async (req: any, res: any) => {
    console.log(req.body);
    const data = await userRepository.getUsers(req.body) //()
    
    req.response.data = data;
}

export async function create(req: any, res: any) {
    console.log(req.body);
    const data = await userRepository.createUser(req.body)
    return req.response.data = data;
}
export async function remove(req: any, res: any) {
    console.log(req.body);
    const data = await userRepository.deleteUser(req.body)
    req.response.message = (data.deletedCount > 0) ? "User deleted successfully": "User not found."
    return req
}

export async function update(req: any, res: any) {
    console.log(req.body);
    const id = req.params.id
    const data = await userRepository.updateUser({id}, req.body)
    req.response.message = (data.modifiedCount > 0) ? "User updated successfully": "User not found."
    return req
}

