import { FastifyRequest, FastifyReply } from "fastify";
declare class UserController {
    createUser(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    getAllUsers(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    getUserById(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    updateUser(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    deleteUser(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
declare const _default: UserController;
export default _default;
