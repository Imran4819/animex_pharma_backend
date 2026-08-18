import { FastifyReply, FastifyRequest } from "fastify";
export declare class AuthController {
    private authService;
    signup: (req: FastifyRequest, reply: FastifyReply) => Promise<never>;
    login: (req: FastifyRequest, reply: FastifyReply) => Promise<never>;
}
