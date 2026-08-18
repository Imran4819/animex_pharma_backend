import UserModel from "../models/user.model";
declare class UserService {
    createUser(data: any): Promise<any>;
    getAllUsers(query: any): Promise<UserModel[]>;
    getUserById(id: string, clientId?: string): Promise<UserModel | null>;
    updateUser(id: string, data: any): Promise<UserModel | null>;
    deleteUser(id: string, clientId?: string): Promise<boolean>;
}
declare const _default: UserService;
export default _default;
