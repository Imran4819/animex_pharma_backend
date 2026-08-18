"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("../services/user.service"));
class UserController {
    // CREATE
    async createUser(request, reply) {
        try {
            const { client_id } = request.params;
            const body = {
                ...request.body,
                client_id,
            };
            const user = await user_service_1.default.createUser(body);
            return reply.code(201).send({
                success: true,
                message: "User created successfully",
                data: user,
            });
        }
        catch (error) {
            return reply.code(400).send({
                success: false,
                message: error.message || "Error creating user",
                error,
            });
        }
    }
    // GET ALL
    async getAllUsers(request, reply) {
        try {
            const { client_id } = request.params;
            const query = {
                ...request.query,
                client_id,
            };
            const users = await user_service_1.default.getAllUsers(query);
            return reply.send({
                success: true,
                data: users,
            });
        }
        catch (error) {
            return reply.code(500).send({
                success: false,
                message: error.message || "Error fetching users",
                error,
            });
        }
    }
    // GET BY ID
    async getUserById(request, reply) {
        try {
            const { id, client_id } = request.params;
            const user = await user_service_1.default.getUserById(id, client_id);
            if (!user) {
                return reply.code(404).send({
                    success: false,
                    message: "User not found",
                });
            }
            return reply.send({
                success: true,
                data: user,
            });
        }
        catch (error) {
            return reply.code(500).send({
                success: false,
                message: error.message || "Error fetching user",
                error,
            });
        }
    }
    // UPDATE
    async updateUser(request, reply) {
        try {
            const { id, client_id } = request.params;
            const body = {
                ...request.body,
                client_id,
            };
            const user = await user_service_1.default.updateUser(id, body);
            if (!user) {
                return reply.code(404).send({
                    success: false,
                    message: "User not found for update",
                });
            }
            return reply.send({
                success: true,
                message: "User updated successfully",
                data: user,
            });
        }
        catch (error) {
            return reply.code(400).send({
                success: false,
                message: error.message || "Error updating user",
                error,
            });
        }
    }
    // DELETE
    async deleteUser(request, reply) {
        try {
            const { id, client_id } = request.params;
            const user = await user_service_1.default.getUserById(id, client_id);
            if (!user) {
                return reply.code(404).send({
                    success: false,
                    message: "User not found",
                });
            }
            await user_service_1.default.deleteUser(id, client_id);
            return reply.send({
                success: true,
                message: "User deleted successfully",
            });
        }
        catch (error) {
            return reply.code(500).send({
                success: false,
                message: error.message || "Error deleting user",
                error,
            });
        }
    }
}
exports.default = new UserController();
//# sourceMappingURL=user.controller.js.map