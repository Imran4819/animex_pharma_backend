import { FastifyRequest, FastifyReply } from "fastify";
declare class ProductCategoryController {
    createCategory(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    getAllCategories(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    getCategoryById(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    updateCategory(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    deleteCategory(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
declare const _default: ProductCategoryController;
export default _default;
