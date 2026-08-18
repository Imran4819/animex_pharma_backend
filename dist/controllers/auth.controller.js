"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const auth_service_1 = require("../services/auth.service");
class AuthController {
    constructor() {
        this.authService = new auth_service_1.AuthService();
        this.signup = async (req, reply) => {
            try {
                const result = await this.authService.signup(req.body);
                return reply.send(result);
            }
            catch (error) {
                return reply.code(400).send({
                    success: false,
                    message: error.message || "Error signing up",
                    error
                });
            }
        };
        this.login = async (req, reply) => {
            try {
                const { email, password } = req.body;
                const result = await this.authService.login({ email, password });
                return reply.send(result);
            }
            catch (error) {
                return reply.code(400).send({
                    success: false,
                    message: error.message || "Error logging in",
                    error
                });
            }
        };
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map