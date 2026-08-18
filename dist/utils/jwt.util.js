"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.signToken = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const app_error_util_1 = require("./app-error.util");
dotenv_1.default.config();
const jwtSecret = process.env.JWT_SECRET || '';
const jwtExpiresIn = process.env.JWT_EXPIRES_IN || '1d';
const signToken = (payload) => {
    if (!jwtSecret) {
        throw new app_error_util_1.AppError(500, 'JWT secret is not configured');
    }
    return jsonwebtoken_1.default.sign(payload, jwtSecret, { expiresIn: jwtExpiresIn });
};
exports.signToken = signToken;
const verifyToken = (token) => {
    if (!jwtSecret) {
        throw new app_error_util_1.AppError(500, 'JWT secret is not configured');
    }
    const decoded = jsonwebtoken_1.default.verify(token, jwtSecret);
    if (typeof decoded === 'string') {
        throw new app_error_util_1.AppError(401, 'Invalid authentication token');
    }
    const { id, name, email, phone_number, status, created_at, updated_at } = decoded;
    if (!id || !name || !email || typeof status !== 'boolean') {
        throw new app_error_util_1.AppError(401, 'Invalid authentication token');
    }
    return {
        id,
        name,
        email,
        phone_number: phone_number ?? null,
        status,
        created_at,
        updated_at
    };
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=jwt.util.js.map