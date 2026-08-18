"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_category_model_1 = __importDefault(require("../models/product_category.model"));
const sequelize_1 = require("sequelize");
class ProductCategoryService {
    // CREATE
    async createCategory(data) {
        const category = await product_category_model_1.default.create({
            client_id: data.client_id,
            category_name: data.category_name,
            category_code: data.category_code ?? null,
            description: data.description ?? null,
            status: data.status !== undefined ? (data.status === "true" || data.status === true) : true,
        });
        return category;
    }
    // GET ALL WITH FILTERS
    async getAllCategories(query) {
        const whereCondition = {};
        if (query.client_id) {
            whereCondition.client_id = query.client_id;
        }
        if (query.category_name) {
            whereCondition.category_name = {
                [sequelize_1.Op.iLike]: `%${query.category_name}%`
            };
        }
        if (query.category_code) {
            whereCondition.category_code = {
                [sequelize_1.Op.iLike]: `%${query.category_code}%`
            };
        }
        if (query.status !== undefined) {
            whereCondition.status = query.status === "true" || query.status === true;
        }
        const categories = await product_category_model_1.default.findAll({
            where: whereCondition,
            order: [["created_at", "DESC"]],
        });
        return categories;
    }
    // GET BY ID
    async getCategoryById(id, clientId) {
        const whereCondition = { id };
        if (clientId) {
            whereCondition.client_id = clientId;
        }
        return await product_category_model_1.default.findOne({
            where: whereCondition,
        });
    }
    // UPDATE
    async updateCategory(id, data) {
        const updateData = {};
        if (data.category_name !== undefined)
            updateData.category_name = data.category_name;
        if (data.category_code !== undefined)
            updateData.category_code = data.category_code;
        if (data.description !== undefined)
            updateData.description = data.description;
        if (data.status !== undefined) {
            updateData.status = data.status === "true" || data.status === true;
        }
        await product_category_model_1.default.update(updateData, {
            where: data.client_id ? { id, client_id: data.client_id } : { id },
        });
        return await this.getCategoryById(id, data.client_id);
    }
    // DELETE
    async deleteCategory(id, clientId) {
        await product_category_model_1.default.destroy({
            where: clientId ? { id, client_id: clientId } : { id },
        });
        return true;
    }
}
exports.default = new ProductCategoryService();
//# sourceMappingURL=product_category.service.js.map