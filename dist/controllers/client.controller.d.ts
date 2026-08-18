import { FastifyRequest, FastifyReply } from "fastify";
declare class ClientController {
    createClient(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    getAllClients(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    getClientById(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    updateClient(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    deleteClient(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
declare const _default: ClientController;
export default _default;
