"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const fastify_1 = __importDefault(require("fastify"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("@fastify/cors"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const db_1 = __importDefault(require("./config/db"));
const client_route_1 = __importDefault(require("./routes/client.route"));
const product_category_route_1 = __importDefault(require("./routes/product_category.route"));
const medical_product_routes_1 = __importDefault(require("./routes/medical_product.routes"));
const medical_store_route_1 = __importDefault(require("./routes/medical_store.route"));
const user_route_1 = __importDefault(require("./routes/user.route"));
dotenv_1.default.config();
exports.app = (0, fastify_1.default)({ logger: true });
exports.app.addContentTypeParser("application/json", { parseAs: "string" }, (req, body, done) => {
    if (!body || body.trim() === "") {
        done(null, null);
        return;
    }
    try {
        const json = JSON.parse(body);
        done(null, json);
    }
    catch (err) {
        err.statusCode = 400;
        done(err, undefined);
    }
});
exports.app.register(cors_1.default, {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
});
// routes register
exports.app.register(auth_route_1.default, { prefix: "/auth" });
exports.app.register(client_route_1.default, { prefix: "/client" });
exports.app.register(user_route_1.default, { prefix: "/user" });
exports.app.register(product_category_route_1.default, { prefix: "/product-category" });
exports.app.register(medical_product_routes_1.default, { prefix: "/medical-product" });
exports.app.register(medical_store_route_1.default, { prefix: "/medical-store" });
const PORT = parseInt(process.env.PORT || "3000", 10);
const HOST = process.env.HOST || "0.0.0.0";
const startServer = async () => {
    try {
        await db_1.default.authenticate();
        console.log("Database connected successfully.");
        await exports.app.listen({ port: PORT, host: HOST });
        console.log(`Server listening on http://${HOST}:${PORT}`);
    }
    catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};
if (require.main === module) {
    startServer();
}
exports.default = exports.app;
//# sourceMappingURL=app.js.map