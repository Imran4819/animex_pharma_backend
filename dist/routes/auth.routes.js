"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = authRoutes;
const auth_controller_1 = require("../controllers/auth.controller");
const authController = new auth_controller_1.AuthController();
async function authRoutes(fastify) {
    fastify.post("/signup", authController.signup);
    fastify.post("/login", authController.login);
}
//# sourceMappingURL=auth.routes.js.map