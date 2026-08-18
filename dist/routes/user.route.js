"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = userRoutes;
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
async function userRoutes(fastify) {
    // CREATE (Unauthenticated - No Token Required)
    fastify.post(`/client/:client_id/users`, user_controller_1.default.createUser);
    // Protected Routes (Token Required)
    fastify.register(async (authRoute) => {
        authRoute.addHook("preHandler", auth_middleware_1.authMiddleware);
        // GET ALL WITH FILTERS
        authRoute.get(`/client/:client_id/users`, user_controller_1.default.getAllUsers);
        // GET BY ID
        authRoute.get(`/client/:client_id/users/:id`, user_controller_1.default.getUserById);
        // UPDATE
        authRoute.put(`/client/:client_id/users/:id`, user_controller_1.default.updateUser);
        // DELETE
        authRoute.delete(`/client/:client_id/users/:id`, user_controller_1.default.deleteUser);
    });
}
//# sourceMappingURL=user.route.js.map