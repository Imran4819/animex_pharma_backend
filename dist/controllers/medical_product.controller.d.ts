import { FastifyRequest, FastifyReply } from "fastify";
declare class MedicalProductController {
    createProduct(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    getAllProducts(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    getProductById(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    updateProduct(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    deleteProduct(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
declare const _default: MedicalProductController;
export default _default;
