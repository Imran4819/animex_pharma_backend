"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const medical_store_service_1 = __importDefault(require("../services/medical_store.service"));
class MedicalStoreController {
    // CREATE
    async createStore(request, reply) {
        try {
            const { client_id } = request.params;
            const body = {
                ...request.body,
                client_id,
            };
            const store = await medical_store_service_1.default.createStore(body);
            return reply.code(201).send({
                success: true,
                message: "Medical store created successfully",
                data: store,
            });
        }
        catch (error) {
            return reply.code(500).send({
                success: false,
                message: "Error creating medical store",
                error,
            });
        }
    }
    // GET ALL
    async getAllStores(request, reply) {
        try {
            const { client_id } = request.params;
            const query = {
                ...request.query,
                client_id,
            };
            const stores = await medical_store_service_1.default.getAllStores(query);
            return reply.send({
                success: true,
                data: stores,
            });
        }
        catch (error) {
            return reply.code(500).send({
                success: false,
                message: "Error fetching medical stores",
                error,
            });
        }
    }
    // GET BY ID
    async getStoreById(request, reply) {
        try {
            const { id, client_id } = request.params;
            const store = await medical_store_service_1.default.getStoreById(id, client_id);
            if (!store) {
                return reply.code(404).send({
                    success: false,
                    message: "Medical store not found",
                });
            }
            return reply.send({
                success: true,
                data: store,
            });
        }
        catch (error) {
            return reply.code(500).send({
                success: false,
                message: "Error fetching medical store",
                error,
            });
        }
    }
    // UPDATE
    async updateStore(request, reply) {
        try {
            const { id, client_id } = request.params;
            const body = {
                ...request.body,
                client_id,
            };
            const store = await medical_store_service_1.default.updateStore(id, body);
            if (!store) {
                return reply.code(404).send({
                    success: false,
                    message: "Medical store not found for update",
                });
            }
            return reply.send({
                success: true,
                message: "Medical store updated successfully",
                data: store,
            });
        }
        catch (error) {
            return reply.code(500).send({
                success: false,
                message: "Error updating medical store",
                error,
            });
        }
    }
    // DELETE
    async deleteStore(request, reply) {
        try {
            const { id, client_id } = request.params;
            const store = await medical_store_service_1.default.getStoreById(id, client_id);
            if (!store) {
                return reply.code(404).send({
                    success: false,
                    message: "Medical store not found",
                });
            }
            await medical_store_service_1.default.deleteStore(id, client_id);
            return reply.send({
                success: true,
                message: "Medical store deleted successfully",
            });
        }
        catch (error) {
            return reply.code(500).send({
                success: false,
                message: "Error deleting medical store",
                error,
            });
        }
    }
}
exports.default = new MedicalStoreController();
//# sourceMappingURL=medical_store.controller.js.map