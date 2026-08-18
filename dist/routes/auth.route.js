"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = authRoutes;
const auth_controller_1 = require("../controllers/auth.controller");
async function authRoutes(fastify) {
    const authController = new auth_controller_1.AuthController();
    fastify.post("/signup", authController.signup);
    fastify.post("/login", authController.login);
}
//# sourceMappingURL=auth.route.js.map