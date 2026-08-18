"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/user.model"));
const sequelize_1 = require("sequelize");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserService {
    // CREATE USER
    async createUser(data) {
        const { name, email, password, phone, role, client_id, enabled } = data;
        if (email) {
            const existingUser = await user_model_1.default.findOne({ where: { email } });
            if (existingUser) {
                throw new Error("User already exists with this email");
            }
        }
        const hashedPassword = password ? await bcrypt_1.default.hash(password, 10) : null;
        const user = await user_model_1.default.create({
            name,
            email: email ?? null,
            password: hashedPassword,
            phone: phone ?? null,
            role: role || "businessowner",
            client_id: client_id ?? null,
            enabled: enabled !== undefined ? enabled : true,
        });
        const userJson = user.toJSON();
        delete userJson.password;
        return userJson;
    }
    // GET ALL USERS (WITH FILTERS)
    async getAllUsers(query) {
        const whereCondition = {};
        if (query.client_id) {
            whereCondition.client_id = query.client_id;
        }
        if (query.name) {
            whereCondition.name = {
                [sequelize_1.Op.iLike]: `%${query.name}%`
            };
        }
        if (query.role) {
            whereCondition.role = query.role;
        }
        if (query.email) {
            whereCondition.email = {
                [sequelize_1.Op.iLike]: `%${query.email}%`
            };
        }
        const users = await user_model_1.default.findAll({
            where: whereCondition,
            attributes: { exclude: ["password"] },
            order: [["created_at", "DESC"]],
        });
        return users;
    }
    // GET USER BY ID
    async getUserById(id, clientId) {
        const whereCondition = { id };
        if (clientId) {
            whereCondition.client_id = clientId;
        }
        return await user_model_1.default.findOne({
            where: whereCondition,
            attributes: { exclude: ["password"] },
        });
    }
    // UPDATE USER
    async updateUser(id, data) {
        const updateData = {};
        if (data.name !== undefined)
            updateData.name = data.name;
        if (data.email !== undefined)
            updateData.email = data.email;
        if (data.phone !== undefined)
            updateData.phone = data.phone;
        if (data.role !== undefined)
            updateData.role = data.role;
        if (data.enabled !== undefined)
            updateData.enabled = data.enabled;
        if (data.password) {
            updateData.password = await bcrypt_1.default.hash(data.password, 10);
        }
        await user_model_1.default.update(updateData, {
            where: data.client_id ? { id, client_id: data.client_id } : { id },
        });
        return await this.getUserById(id, data.client_id);
    }
    // DELETE USER
    async deleteUser(id, clientId) {
        await user_model_1.default.destroy({
            where: clientId ? { id, client_id: clientId } : { id },
        });
        return true;
    }
}
exports.default = new UserService();
//# sourceMappingURL=user.service.js.map