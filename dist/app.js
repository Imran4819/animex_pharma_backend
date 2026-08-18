"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const fastify_1 = __importDefault(require("fastify"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("@fastify/cors"));
const db_1 = __importDefault(require("./config/db"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const client_routes_1 = __importDefault(require("./routes/client.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const productCategory_routes_1 = __importDefault(require("./routes/productCategory.routes"));
const medicalProduct_routes_1 = __importDefault(require("./routes/medicalProduct.routes"));
const medicalStore_routes_1 = __importDefault(require("./routes/medicalStore.routes"));
dotenv_1.default.config();
exports.app = (0, fastify_1.default)({ logger: true });
// ─── JSON body parser ─────────────────────────────────────────────────────────
exports.app.addContentTypeParser("application/json", { parseAs: "string" }, (req, body, done) => {
    if (!body || body.trim() === "") {
        done(null, null);
        return;
    }
    try {
        done(null, JSON.parse(body));
    }
    catch (err) {
        err.statusCode = 400;
        done(err, undefined);
    }
});
// ─── CORS ─────────────────────────────────────────────────────────────────────
exports.app.register(cors_1.default, {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
});
// ─── Routes (one file per controller) ────────────────────────────────────────
exports.app.register(auth_routes_1.default, { prefix: "/auth" });
exports.app.register(client_routes_1.default, { prefix: "/client" });
exports.app.register(user_routes_1.default, { prefix: "/user" });
exports.app.register(productCategory_routes_1.default, { prefix: "/product-category" });
exports.app.register(medicalProduct_routes_1.default, { prefix: "/medical-product" });
exports.app.register(medicalStore_routes_1.default, { prefix: "/medical-store" });
// ─── Server start ─────────────────────────────────────────────────────────────
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