"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = clientRoutes;
const client_controller_1 = __importDefault(require("../controllers/client.controller"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
async function clientRoutes(fastify) {
    // Public
    fastify.post("/clients", client_controller_1.default.createClient);
    fastify.get("/clients", client_controller_1.default.getAllClients);
    // Protected
    fastify.register(async (auth) => {
        auth.addHook("preHandler", auth_middleware_1.authMiddleware);
        auth.get("/clients/:id", client_controller_1.default.getClientById);
        auth.put("/clients/:id", client_controller_1.default.updateClient);
        auth.delete("/clients/:id", client_controller_1.default.deleteClient);
    });
}
//# sourceMappingURL=client.routes.js.map