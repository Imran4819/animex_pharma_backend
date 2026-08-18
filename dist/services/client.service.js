"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_model_1 = __importDefault(require("../models/client.model"));
const sequelize_1 = require("sequelize");
class ClientService {
    // CREATE
    async createClient(data) {
        const client = await client_model_1.default.create({
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            city: data.city,
            status: data.status,
        });
        return client;
    }
    // GET ALL (WITH NAME FILTER)
    async getAllClients(query) {
        const whereCondition = {};
        if (query.name) {
            whereCondition.name = {
                [sequelize_1.Op.iLike]: `%${query.name}%`
            };
        }
        if (query.status) {
            whereCondition.status = query.status;
        }
        const clients = await client_model_1.default.findAll({
            where: whereCondition,
            order: [["created_at", "DESC"]],
        });
        return clients;
    }
    // GET BY ID
    async getClientById(id) {
        return await client_model_1.default.findOne({
            where: { id }
        });
    }
    // UPDATE
    async updateClient(id, data) {
        await client_model_1.default.update({
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            city: data.city,
            status: data.status,
        }, {
            where: { id }
        });
        return await this.getClientById(id);
    }
    // DELETE
    async deleteClient(id) {
        await client_model_1.default.destroy({
            where: { id }
        });
        return true;
    }
}
exports.default = new ClientService();
//# sourceMappingURL=client.service.js.map