import ClientModel from "../models/client.model";
export declare class AuthService {
    signup(data: any): Promise<{
        message: string;
        token: string;
        client: ClientModel;
    }>;
    login(data: any): Promise<{
        message: string;
        token: string;
        client: ClientModel;
    }>;
}
