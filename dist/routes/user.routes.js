"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = userRoutes;
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
async function userRoutes(fastify) {
    // Public
    fastify.post("/client/:client_id/users", user_controller_1.default.createUser);
    // Protected
    fastify.register(async (auth) => {
        auth.addHook("preHandler", auth_middleware_1.authMiddleware);
        auth.get("/client/:client_id/users", user_controller_1.default.getAllUsers);
        auth.get("/client/:client_id/users/:id", user_controller_1.default.getUserById);
        auth.put("/client/:client_id/users/:id", user_controller_1.default.updateUser);
        auth.delete("/client/:client_id/users/:id", user_controller_1.default.deleteUser);
    });
}
//# sourceMappingURL=user.routes.js.map