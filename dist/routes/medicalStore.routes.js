"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = medicalStoreRoutes;
const medical_store_controller_1 = __importDefault(require("../controllers/medical_store.controller"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
const ALLOWED_ROLES = ["superadmin", "admin", "businessowner"];
async function medicalStoreRoutes(fastify) {
    fastify.addHook("preHandler", auth_middleware_1.authMiddleware);
    fastify.addHook("preHandler", (0, role_middleware_1.roleMiddleware)(ALLOWED_ROLES));
    fastify.post("/client/:client_id/medical-stores", medical_store_controller_1.default.createStore);
    fastify.get("/client/:client_id/medical-stores", medical_store_controller_1.default.getAllStores);
    fastify.get("/client/:client_id/medical-stores/:id", medical_store_controller_1.default.getStoreById);
    fastify.put("/client/:client_id/medical-stores/:id", medical_store_controller_1.default.updateStore);
    fastify.delete("/client/:client_id/medical-stores/:id", medical_store_controller_1.default.deleteStore);
}
//# sourceMappingURL=medicalStore.routes.js.map