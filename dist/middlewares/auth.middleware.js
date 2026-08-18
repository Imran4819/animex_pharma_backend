"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
async function authMiddleware(request, reply) {
    try {
        const authHeader = request.headers.authorization;
        if (!authHeader) {
            return reply.status(401).send({
                message: "Authorization header missing"
            });
        }
        const token = authHeader.split(" ")[1];
        if (!token) {
            return reply.status(401).send({
                message: "Token missing"
            });
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || "default_secret");
        request.user = decoded;
    }
    catch (error) {
        return reply.status(401).send({
            message: "Invalid or expired token"
        });
    }
}
//# sourceMappingURL=auth.middleware.js.map