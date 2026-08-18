"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = invoiceRoutes;
const invoice_controller_1 = __importDefault(require("../controllers/invoice.controller"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
const ALLOWED_ROLES = ["superadmin", "admin", "businessowner"];
async function invoiceRoutes(fastify) {
    fastify.addHook("preHandler", auth_middleware_1.authMiddleware);
    fastify.addHook("preHandler", (0, role_middleware_1.roleMiddleware)(ALLOWED_ROLES));
    // CREATE INVOICE
    fastify.post("/client/:client_id/invoices", invoice_controller_1.default.createInvoice);
    // GET ALL INVOICES
    fastify.get("/client/:client_id/invoices", invoice_controller_1.default.getAllInvoices);
    // GET INVOICE BY ID
    fastify.get("/client/:client_id/invoices/:id", invoice_controller_1.default.getInvoiceById);
    // UPDATE INVOICE
    fastify.put("/client/:client_id/invoices/:id", invoice_controller_1.default.updateInvoice);
    // DELETE INVOICE
    fastify.delete("/client/:client_id/invoices/:id", invoice_controller_1.default.deleteInvoice);
    // DOWNLOAD PDF
    fastify.get("/client/:client_id/invoices/:id/pdf", invoice_controller_1.default.downloadInvoicePdf);
    // PREVIEW HTML
    fastify.get("/client/:client_id/invoices/:id/preview", invoice_controller_1.default.previewInvoiceHtml);
}
//# sourceMappingURL=invoice.routes.js.map