"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = clientRoutes;
const client_controller_1 = __importDefault(require("../controllers/client.controller"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
async function clientRoutes(fastify) {
    // Unauthenticated: Public client creation & listing
    fastify.post(`/clients`, client_controller_1.default.createClient);
    fastify.get(`/clients`, client_controller_1.default.getAllClients);
    // Authenticated routes
    fastify.register(async (authRoute) => {
        authRoute.addHook("preHandler", auth_middleware_1.authMiddleware);
        authRoute.get(`/clients/:id`, client_controller_1.default.getClientById);
        authRoute.put(`/clients/:id`, client_controller_1.default.updateClient);
        authRoute.delete(`/clients/:id`, client_controller_1.default.deleteClient);
    });
}
//# sourceMappingURL=client.route.js.map