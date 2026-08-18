import { FastifyRequest, FastifyReply } from "fastify";
declare class MedicalStoreController {
    createStore(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    getAllStores(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    getStoreById(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    updateStore(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    deleteStore(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
declare const _default: MedicalStoreController;
export default _default;
