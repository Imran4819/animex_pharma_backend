"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const client_model_1 = __importDefault(require("../models/client.model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthService {
    async signup(data) {
        const { name, email, phone, address, city } = data;
        if (!name) {
            throw new Error("Name is required");
        }
        const client = await client_model_1.default.create({
            name,
            email: email ?? null,
            phone: phone ?? null,
            address: address ?? null,
            city: city ?? null,
            status: "active"
        });
        const token = jsonwebtoken_1.default.sign({
            id: client.id,
            name: client.name,
            email: client.email ?? ""
        }, process.env.JWT_SECRET || "default_secret", { expiresIn: "1d" });
        return {
            message: "Client registered successfully",
            token,
            client
        };
    }
    async login(data) {
        const { email, phone, password } = data;
        if (!password) {
            throw new Error("Password is required");
        }
        const whereCondition = {};
        if (email)
            whereCondition.email = email;
        if (phone)
            whereCondition.phone = phone;
        const user = await user_model_1.default.findOne({ where: whereCondition });
        if (!user) {
            throw new Error("User not found");
        }
        if (!user.password) {
            throw new Error("Invalid credentials");
        }
        const passwordMatches = await bcrypt_1.default.compare(password, user.password);
        if (!passwordMatches) {
            throw new Error("Invalid credentials");
        }
        const token = jsonwebtoken_1.default.sign({
            id: user.id,
            name: user.name,
            email: user.email ?? ""
        }, process.env.JWT_SECRET || "default_secret", { expiresIn: "1d" });
        return {
            message: "Login successful",
            token,
            user
        };
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map