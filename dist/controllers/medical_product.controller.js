"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const medical_product_service_1 = __importDefault(require("../services/medical_product.service"));
class MedicalProductController {
    // CREATE
    async createProduct(request, reply) {
        try {
            const { client_id } = request.params;
            const body = {
                ...request.body,
                client_id,
            };
            const product = await medical_product_service_1.default.createProduct(body);
            return reply.code(201).send({
                success: true,
                message: "Medical product created successfully",
                data: product,
            });
        }
        catch (error) {
            return reply.code(500).send({
                success: false,
                message: "Error creating medical product",
                error,
            });
        }
    }
    // GET ALL
    async getAllProducts(request, reply) {
        try {
            const { client_id } = request.params;
            const query = {
                ...request.query,
                client_id,
            };
            const products = await medical_product_service_1.default.getAllProducts(query);
            return reply.send({
                success: true,
                data: products,
            });
        }
        catch (error) {
            return reply.code(500).send({
                success: false,
                message: "Error fetching medical products",
                error,
            });
        }
    }
    // GET BY ID
    async getProductById(request, reply) {
        try {
            const { id, client_id } = request.params;
            const product = await medical_product_service_1.default.getProductById(id, client_id);
            if (!product) {
                return reply.code(404).send({
                    success: false,
                    message: "Medical product not found",
                });
            }
            return reply.send({
                success: true,
                data: product,
            });
        }
        catch (error) {
            return reply.code(500).send({
                success: false,
                message: "Error fetching medical product",
                error,
            });
        }
    }
    // UPDATE
    async updateProduct(request, reply) {
        try {
            const { id, client_id } = request.params;
            const body = {
                ...request.body,
                client_id,
            };
            const product = await medical_product_service_1.default.updateProduct(id, body);
            if (!product) {
                return reply.code(404).send({
                    success: false,
                    message: "Medical product not found for update",
                });
            }
            return reply.send({
                success: true,
                message: "Medical product updated successfully",
                data: product,
            });
        }
        catch (error) {
            return reply.code(500).send({
                success: false,
                message: "Error updating medical product",
                error,
            });
        }
    }
    // DELETE
    async deleteProduct(request, reply) {
        try {
            const { id, client_id } = request.params;
            const product = await medical_product_service_1.default.getProductById(id, client_id);
            if (!product) {
                return reply.code(404).send({
                    success: false,
                    message: "Medical product not found",
                });
            }
            await medical_product_service_1.default.deleteProduct(id, client_id);
            return reply.send({
                success: true,
                message: "Medical product deleted successfully",
            });
        }
        catch (error) {
            return reply.code(500).send({
                success: false,
                message: "Error deleting medical product",
                error,
            });
        }
    }
}
exports.default = new MedicalProductController();
//# sourceMappingURL=medical_product.controller.js.map