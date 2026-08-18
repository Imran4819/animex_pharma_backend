import type { AuthClientPayload } from '../interface/client.interface';
export declare const signToken: (payload: AuthClientPayload) => string;
export declare const verifyToken: (token: string) => AuthClientPayload;
