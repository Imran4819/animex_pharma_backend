"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const medical_store_model_1 = __importDefault(require("../models/medical_store.model"));
const sequelize_1 = require("sequelize");
class MedicalStoreService {
    // CREATE
    async createStore(data) {
        const store = await medical_store_model_1.default.create({
            client_id: data.client_id,
            firm_name: data.firm_name,
            contact_person_name: data.contact_person_name ?? null,
            phone_number: data.phone_number,
            district: data.district,
            address: data.address,
            status: data.status !== undefined ? (data.status === "true" || data.status === true) : true,
        });
        return store;
    }
    // GET ALL WITH FILTERS
    async getAllStores(query) {
        const whereCondition = {};
        if (query.client_id) {
            whereCondition.client_id = query.client_id;
        }
        if (query.firm_name) {
            whereCondition.firm_name = {
                [sequelize_1.Op.iLike]: `%${query.firm_name}%`
            };
        }
        if (query.district) {
            whereCondition.district = {
                [sequelize_1.Op.iLike]: `%${query.district}%`
            };
        }
        if (query.status !== undefined) {
            whereCondition.status = query.status === "true" || query.status === true;
        }
        const stores = await medical_store_model_1.default.findAll({
            where: whereCondition,
            order: [["created_at", "DESC"]],
        });
        return stores;
    }
    // GET BY ID
    async getStoreById(id, clientId) {
        const whereCondition = { id };
        if (clientId) {
            whereCondition.client_id = clientId;
        }
        return await medical_store_model_1.default.findOne({
            where: whereCondition,
        });
    }
    // UPDATE
    async updateStore(id, data) {
        const updateData = {};
        if (data.firm_name !== undefined)
            updateData.firm_name = data.firm_name;
        if (data.contact_person_name !== undefined)
            updateData.contact_person_name = data.contact_person_name;
        if (data.phone_number !== undefined)
            updateData.phone_number = data.phone_number;
        if (data.district !== undefined)
            updateData.district = data.district;
        if (data.address !== undefined)
            updateData.address = data.address;
        if (data.status !== undefined) {
            updateData.status = data.status === "true" || data.status === true;
        }
        await medical_store_model_1.default.update(updateData, {
            where: data.client_id ? { id, client_id: data.client_id } : { id },
        });
        return await this.getStoreById(id, data.client_id);
    }
    // DELETE
    async deleteStore(id, clientId) {
        await medical_store_model_1.default.destroy({
            where: clientId ? { id, client_id: clientId } : { id },
        });
        return true;
    }
}
exports.default = new MedicalStoreService();
//# sourceMappingURL=medical_store.service.js.map