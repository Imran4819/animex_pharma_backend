"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceModel = exports.MedicalStoreModel = exports.MedicalProductModel = exports.ProductCategoryModel = exports.ClientModel = void 0;
const client_model_1 = __importDefault(require("./client.model"));
exports.ClientModel = client_model_1.default;
const product_category_model_1 = __importDefault(require("./product_category.model"));
exports.ProductCategoryModel = product_category_model_1.default;
const medical_product_model_1 = __importDefault(require("./medical_product.model"));
exports.MedicalProductModel = medical_product_model_1.default;
const medical_store_model_1 = __importDefault(require("./medical_store.model"));
exports.MedicalStoreModel = medical_store_model_1.default;
const invoice_model_1 = __importDefault(require("./invoice.model"));
exports.InvoiceModel = invoice_model_1.default;
//# sourceMappingURL=index.js.map