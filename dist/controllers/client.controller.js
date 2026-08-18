"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_service_1 = __importDefault(require("../services/client.service"));
class ClientController {
    // CREATE
    async createClient(request, reply) {
        try {
            const body = request.body;
            const client = await client_service_1.default.createClient(body);
            return reply.code(201).send({
                success: true,
                message: "Client created successfully",
                data: client,
            });
        }
        catch (error) {
            return reply.code(500).send({
                success: false,
                message: "Error creating client",
                error,
            });
        }
    }
    // GET ALL
    async getAllClients(request, reply) {
        try {
            const query = request.query;
            const clients = await client_service_1.default.getAllClients(query);
            return reply.send({
                success: true,
                data: clients,
            });
        }
        catch (error) {
            return reply.code(500).send({
                success: false,
                message: "Error fetching clients",
                error,
            });
        }
    }
    // GET BY ID
    async getClientById(request, reply) {
        try {
            const { id } = request.params;
            const client = await client_service_1.default.getClientById(id);
            if (!client) {
                return reply.code(404).send({
                    success: false,
                    message: "Client not found",
                });
            }
            return reply.send({
                success: true,
                data: client,
            });
        }
        catch (error) {
            return reply.code(500).send({
                success: false,
                message: "Error fetching client",
                error,
            });
        }
    }
    // UPDATE
    async updateClient(request, reply) {
        try {
            const { id } = request.params;
            const body = request.body;
            const client = await client_service_1.default.updateClient(id, body);
            return reply.send({
                success: true,
                message: "Client updated successfully",
                data: client,
            });
        }
        catch (error) {
            return reply.code(500).send({
                success: false,
                message: "Error updating client",
                error,
            });
        }
    }
    // DELETE
    async deleteClient(request, reply) {
        try {
            const { id } = request.params;
            await client_service_1.default.deleteClient(id);
            return reply.send({
                success: true,
                message: "Client deleted successfully",
            });
        }
        catch (error) {
            return reply.code(500).send({
                success: false,
                message: "Error deleting client",
                error,
            });
        }
    }
}
exports.default = new ClientController();
//# sourceMappingURL=client.controller.js.map