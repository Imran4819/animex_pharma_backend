import Fastify from "fastify";
import dotenv from "dotenv";
import fastifyCors from "@fastify/cors";
import authRoutes from "./routes/auth.route";
import sequelize from "./config/db"; 
import clientRoutes from "./routes/client.route";
import productCategoryRoutes from "./routes/product_category.route";
import medicalProductRoutes from "./routes/medical_product.routes";
import medicalStoreRoutes from "./routes/medical_store.route";
import userRoutes from "./routes/user.route";

dotenv.config();

export const app = Fastify({ logger: true });

app.addContentTypeParser("application/json", { parseAs: "string" }, (req, body: string, done) => {
  if (!body || body.trim() === "") {
    done(null, null);
    return;
  }
  try {
    const json = JSON.parse(body);
    done(null, json);
  } catch (err: any) {
    err.statusCode = 400;
    done(err, undefined);
  }
});

app.register(fastifyCors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
});

// routes register
app.register(authRoutes, { prefix: "/auth" });
app.register(clientRoutes, { prefix: "/client" });
app.register(userRoutes, { prefix: "/user" });
app.register(productCategoryRoutes, { prefix: "/product-category" });
app.register(medicalProductRoutes, { prefix: "/medical-product" });
app.register(medicalStoreRoutes, { prefix: "/medical-store" });

const PORT = parseInt(process.env.PORT || "3000", 10);
const HOST = process.env.HOST || "0.0.0.0";

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully.");
    await app.listen({ port: PORT, host: HOST });
    console.log(`Server listening on http://${HOST}:${PORT}`);
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

if (require.main === module) {
  startServer();
}

export default app;
