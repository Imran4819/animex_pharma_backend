"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = medicalStoreRoutes;
const medical_store_controller_1 = __importDefault(require("../controllers/medical_store.controller"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
async function medicalStoreRoutes(fastify) {
    fastify.addHook("preHandler", auth_middleware_1.authMiddleware);
    fastify.addHook("preHandler", (0, role_middleware_1.roleMiddleware)(["superadmin", "admin", "businessowner"]));
    // CREATE
    fastify.post(`/client/:client_id/medical-stores`, medical_store_controller_1.default.createStore);
    // GET ALL WITH FILTERS
    fastify.get(`/client/:client_id/medical-stores`, medical_store_controller_1.default.getAllStores);
    // GET BY ID
    fastify.get(`/client/:client_id/medical-stores/:id`, medical_store_controller_1.default.getStoreById);
    // UPDATE
    fastify.put(`/client/:client_id/medical-stores/:id`, medical_store_controller_1.default.updateStore);
    // DELETE
    fastify.delete(`/client/:client_id/medical-stores/:id`, medical_store_controller_1.default.deleteStore);
}
//# sourceMappingURL=medical_store.route.js.map