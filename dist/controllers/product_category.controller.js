"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_category_service_1 = __importDefault(require("../services/product_category.service"));
class ProductCategoryController {
    // CREATE
    async createCategory(request, reply) {
        try {
            const { client_id } = request.params;
            const body = {
                ...request.body,
                client_id,
            };
            const category = await product_category_service_1.default.createCategory(body);
            return reply.code(201).send({
                success: true,
                message: "Product category created successfully",
                data: category,
            });
        }
        catch (error) {
            return reply.code(500).send({
                success: false,
                message: "Error creating product category",
                error,
            });
        }
    }
    // GET ALL
    async getAllCategories(request, reply) {
        try {
            const { client_id } = request.params;
            const query = {
                ...request.query,
                client_id,
            };
            const categories = await product_category_service_1.default.getAllCategories(query);
            return reply.send({
                success: true,
                data: categories,
            });
        }
        catch (error) {
            return reply.code(500).send({
                success: false,
                message: "Error fetching product categories",
                error,
            });
        }
    }
    // GET BY ID
    async getCategoryById(request, reply) {
        try {
            const { id, client_id } = request.params;
            const category = await product_category_service_1.default.getCategoryById(id, client_id);
            if (!category) {
                return reply.code(404).send({
                    success: false,
                    message: "Product category not found",
                });
            }
            return reply.send({
                success: true,
                data: category,
            });
        }
        catch (error) {
            return reply.code(500).send({
                success: false,
                message: "Error fetching product category",
                error,
            });
        }
    }
    // UPDATE
    async updateCategory(request, reply) {
        try {
            const { id, client_id } = request.params;
            const body = {
                ...request.body,
                client_id,
            };
            const category = await product_category_service_1.default.updateCategory(id, body);
            if (!category) {
                return reply.code(404).send({
                    success: false,
                    message: "Product category not found for update",
                });
            }
            return reply.send({
                success: true,
                message: "Product category updated successfully",
                data: category,
            });
        }
        catch (error) {
            return reply.code(500).send({
                success: false,
                message: "Error updating product category",
                error,
            });
        }
    }
    // DELETE
    async deleteCategory(request, reply) {
        try {
            const { id, client_id } = request.params;
            const category = await product_category_service_1.default.getCategoryById(id, client_id);
            if (!category) {
                return reply.code(404).send({
                    success: false,
                    message: "Product category not found",
                });
            }
            await product_category_service_1.default.deleteCategory(id, client_id);
            return reply.send({
                success: true,
                message: "Product category deleted successfully",
            });
        }
        catch (error) {
            return reply.code(500).send({
                success: false,
                message: "Error deleting product category",
                error,
            });
        }
    }
}
exports.default = new ProductCategoryController();
//# sourceMappingURL=product_category.controller.js.map