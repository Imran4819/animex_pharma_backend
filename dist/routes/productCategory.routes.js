"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = productCategoryRoutes;
const product_category_controller_1 = __importDefault(require("../controllers/product_category.controller"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
const ALLOWED_ROLES = ["superadmin", "admin", "businessowner"];
async function productCategoryRoutes(fastify) {
    fastify.addHook("preHandler", auth_middleware_1.authMiddleware);
    fastify.addHook("preHandler", (0, role_middleware_1.roleMiddleware)(ALLOWED_ROLES));
    fastify.post("/client/:client_id/product-categories", product_category_controller_1.default.createCategory);
    fastify.get("/client/:client_id/product-categories", product_category_controller_1.default.getAllCategories);
    fastify.get("/client/:client_id/product-categories/:id", product_category_controller_1.default.getCategoryById);
    fastify.put("/client/:client_id/product-categories/:id", product_category_controller_1.default.updateCategory);
    fastify.delete("/client/:client_id/product-categories/:id", product_category_controller_1.default.deleteCategory);
}
//# sourceMappingURL=productCategory.routes.js.map