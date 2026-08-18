"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = productCategoryRoutes;
const product_category_controller_1 = __importDefault(require("../controllers/product_category.controller"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
async function productCategoryRoutes(fastify) {
    fastify.addHook("preHandler", auth_middleware_1.authMiddleware);
    fastify.addHook("preHandler", (0, role_middleware_1.roleMiddleware)(["superadmin", "admin", "businessowner"]));
    // CREATE
    fastify.post(`/client/:client_id/product-categories`, product_category_controller_1.default.createCategory);
    // GET ALL WITH FILTERS
    fastify.get(`/client/:client_id/product-categories`, product_category_controller_1.default.getAllCategories);
    // GET BY ID
    fastify.get(`/client/:client_id/product-categories/:id`, product_category_controller_1.default.getCategoryById);
    // UPDATE
    fastify.put(`/client/:client_id/product-categories/:id`, product_category_controller_1.default.updateCategory);
    // DELETE
    fastify.delete(`/client/:client_id/product-categories/:id`, product_category_controller_1.default.deleteCategory);
}
//# sourceMappingURL=product_category.route.js.map