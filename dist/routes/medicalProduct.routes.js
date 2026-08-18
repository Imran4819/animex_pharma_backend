"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = medicalProductRoutes;
const medical_product_controller_1 = __importDefault(require("../controllers/medical_product.controller"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
const ALLOWED_ROLES = ["superadmin", "admin", "businessowner"];
async function medicalProductRoutes(fastify) {
    fastify.addHook("preHandler", auth_middleware_1.authMiddleware);
    fastify.addHook("preHandler", (0, role_middleware_1.roleMiddleware)(ALLOWED_ROLES));
    fastify.post("/client/:client_id/medical-products", medical_product_controller_1.default.createProduct);
    fastify.get("/client/:client_id/medical-products", medical_product_controller_1.default.getAllProducts);
    fastify.get("/client/:client_id/medical-products/:id", medical_product_controller_1.default.getProductById);
    fastify.put("/client/:client_id/medical-products/:id", medical_product_controller_1.default.updateProduct);
    fastify.delete("/client/:client_id/medical-products/:id", medical_product_controller_1.default.deleteProduct);
}
//# sourceMappingURL=medicalProduct.routes.js.map