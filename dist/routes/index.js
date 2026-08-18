"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
const auth_controller_1 = require("../controllers/auth.controller");
const client_controller_1 = __importDefault(require("../controllers/client.controller"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const product_category_controller_1 = __importDefault(require("../controllers/product_category.controller"));
const medical_product_controller_1 = __importDefault(require("../controllers/medical_product.controller"));
const medical_store_controller_1 = __importDefault(require("../controllers/medical_store.controller"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
const ALLOWED_ROLES = ["superadmin", "admin", "businessowner"];
async function router(fastify) {
    // ─────────────────────────────────────────────
    // AUTH  (public – no token required)
    // ─────────────────────────────────────────────
    const authController = new auth_controller_1.AuthController();
    fastify.post("/auth/signup", authController.signup);
    fastify.post("/auth/login", authController.login);
    // ─────────────────────────────────────────────
    // CLIENT  (mixed public / protected)
    // ─────────────────────────────────────────────
    fastify.post("/client/clients", client_controller_1.default.createClient);
    fastify.get("/client/clients", client_controller_1.default.getAllClients);
    fastify.register(async (protectedClient) => {
        protectedClient.addHook("preHandler", auth_middleware_1.authMiddleware);
        protectedClient.get("/client/clients/:id", client_controller_1.default.getClientById);
        protectedClient.put("/client/clients/:id", client_controller_1.default.updateClient);
        protectedClient.delete("/client/clients/:id", client_controller_1.default.deleteClient);
    });
    // ─────────────────────────────────────────────
    // USER  (mixed public / protected)
    // ─────────────────────────────────────────────
    fastify.post("/user/client/:client_id/users", user_controller_1.default.createUser);
    fastify.register(async (protectedUser) => {
        protectedUser.addHook("preHandler", auth_middleware_1.authMiddleware);
        protectedUser.get("/user/client/:client_id/users", user_controller_1.default.getAllUsers);
        protectedUser.get("/user/client/:client_id/users/:id", user_controller_1.default.getUserById);
        protectedUser.put("/user/client/:client_id/users/:id", user_controller_1.default.updateUser);
        protectedUser.delete("/user/client/:client_id/users/:id", user_controller_1.default.deleteUser);
    });
    // ─────────────────────────────────────────────
    // PRODUCT CATEGORIES  (auth + role required)
    // ─────────────────────────────────────────────
    fastify.register(async (catRoute) => {
        catRoute.addHook("preHandler", auth_middleware_1.authMiddleware);
        catRoute.addHook("preHandler", (0, role_middleware_1.roleMiddleware)(ALLOWED_ROLES));
        catRoute.post("/product-category/client/:client_id/product-categories", product_category_controller_1.default.createCategory);
        catRoute.get("/product-category/client/:client_id/product-categories", product_category_controller_1.default.getAllCategories);
        catRoute.get("/product-category/client/:client_id/product-categories/:id", product_category_controller_1.default.getCategoryById);
        catRoute.put("/product-category/client/:client_id/product-categories/:id", product_category_controller_1.default.updateCategory);
        catRoute.delete("/product-category/client/:client_id/product-categories/:id", product_category_controller_1.default.deleteCategory);
    });
    // ─────────────────────────────────────────────
    // MEDICAL PRODUCTS  (auth + role required)
    // ─────────────────────────────────────────────
    fastify.register(async (productRoute) => {
        productRoute.addHook("preHandler", auth_middleware_1.authMiddleware);
        productRoute.addHook("preHandler", (0, role_middleware_1.roleMiddleware)(ALLOWED_ROLES));
        productRoute.post("/medical-product/client/:client_id/medical-products", medical_product_controller_1.default.createProduct);
        productRoute.get("/medical-product/client/:client_id/medical-products", medical_product_controller_1.default.getAllProducts);
        productRoute.get("/medical-product/client/:client_id/medical-products/:id", medical_product_controller_1.default.getProductById);
        productRoute.put("/medical-product/client/:client_id/medical-products/:id", medical_product_controller_1.default.updateProduct);
        productRoute.delete("/medical-product/client/:client_id/medical-products/:id", medical_product_controller_1.default.deleteProduct);
    });
    // ─────────────────────────────────────────────
    // MEDICAL STORES  (auth + role required)
    // ─────────────────────────────────────────────
    fastify.register(async (storeRoute) => {
        storeRoute.addHook("preHandler", auth_middleware_1.authMiddleware);
        storeRoute.addHook("preHandler", (0, role_middleware_1.roleMiddleware)(ALLOWED_ROLES));
        storeRoute.post("/medical-store/client/:client_id/medical-stores", medical_store_controller_1.default.createStore);
        storeRoute.get("/medical-store/client/:client_id/medical-stores", medical_store_controller_1.default.getAllStores);
        storeRoute.get("/medical-store/client/:client_id/medical-stores/:id", medical_store_controller_1.default.getStoreById);
        storeRoute.put("/medical-store/client/:client_id/medical-stores/:id", medical_store_controller_1.default.updateStore);
        storeRoute.delete("/medical-store/client/:client_id/medical-stores/:id", medical_store_controller_1.default.deleteStore);
    });
}
//# sourceMappingURL=index.js.map