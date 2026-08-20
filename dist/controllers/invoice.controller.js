"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const invoice_service_1 = __importDefault(require("../services/invoice.service"));
class InvoiceController {
    // CREATE
    async createInvoice(request, reply) {
        try {
            const { client_id } = request.params;
            const body = {
                ...request.body,
                client_id
            };
            const invoice = await invoice_service_1.default.createInvoice(body);
            return reply.code(201).send({
                success: true,
                message: "Invoice created successfully",
                data: invoice
            });
        }
        catch (error) {
            return reply.code(500).send({
                success: false,
                message: "Error creating invoice",
                error: error.message || error
            });
        }
    }
    // GET ALL
    async getAllInvoices(request, reply) {
        try {
            const { client_id } = request.params;
            const query = {
                ...request.query,
                client_id
            };
            const invoices = await invoice_service_1.default.getAllInvoices(query);
            return reply.send({
                success: true,
                data: invoices
            });
        }
        catch (error) {
            return reply.code(500).send({
                success: false,
                message: "Error fetching invoices",
                error: error.message || error
            });
        }
    }
    // GET BY ID
    async getInvoiceById(request, reply) {
        try {
            const { id, client_id } = request.params;
            const invoice = await invoice_service_1.default.getInvoiceById(id, client_id);
            if (!invoice) {
                return reply.code(404).send({
                    success: false,
                    message: "Invoice not found"
                });
            }
            return reply.send({
                success: true,
                data: invoice
            });
        }
        catch (error) {
            return reply.code(500).send({
                success: false,
                message: "Error fetching invoice",
                error: error.message || error
            });
        }
    }
    // UPDATE
    async updateInvoice(request, reply) {
        try {
            const { id, client_id } = request.params;
            const body = {
                ...request.body,
                client_id
            };
            const invoice = await invoice_service_1.default.updateInvoice(id, body);
            if (!invoice) {
                return reply.code(404).send({
                    success: false,
                    message: "Invoice not found for update"
                });
            }
            return reply.send({
                success: true,
                message: "Invoice updated successfully",
                data: invoice
            });
        }
        catch (error) {
            return reply.code(500).send({
                success: false,
                message: "Error updating invoice",
                error: error.message || error
            });
        }
    }
    // DELETE
    async deleteInvoice(request, reply) {
        try {
            const { id, client_id } = request.params;
            const invoice = await invoice_service_1.default.getInvoiceById(id, client_id);
            if (!invoice) {
                return reply.code(404).send({
                    success: false,
                    message: "Invoice not found"
                });
            }
            await invoice_service_1.default.deleteInvoice(id, client_id);
            return reply.send({
                success: true,
                message: "Invoice deleted successfully"
            });
        }
        catch (error) {
            return reply.code(500).send({
                success: false,
                message: "Error deleting invoice",
                error: error.message || error
            });
        }
    }
    // DOWNLOAD PDF
    async downloadInvoicePdf(request, reply) {
        try {
            const { id, client_id } = request.params;
            const invoice = await invoice_service_1.default.getInvoiceById(id, client_id);
            if (!invoice) {
                return reply.code(404).send({
                    success: false,
                    message: "Invoice not found"
                });
            }
            const pdfBuffer = await invoice_service_1.default.generateInvoicePdf(invoice);
            const pdfInvoiceNumber = invoice.company_invoice_number || invoice.invoice_number;
            return reply
                .header("Content-Type", "application/pdf")
                .header("Content-Disposition", `attachment; filename=invoice_${pdfInvoiceNumber}.pdf`)
                .send(pdfBuffer);
        }
        catch (error) {
            return reply.code(500).send({
                success: false,
                message: "Error generating invoice PDF",
                error: error.message || error
            });
        }
    }
    // PREVIEW HTML
    async previewInvoiceHtml(request, reply) {
        try {
            const { id, client_id } = request.params;
            const invoice = await invoice_service_1.default.getInvoiceById(id, client_id);
            if (!invoice) {
                return reply.code(404).send({
                    success: false,
                    message: "Invoice not found"
                });
            }
            const html = invoice_service_1.default.renderInvoiceHtml(invoice);
            return reply
                .header("Content-Type", "text/html")
                .send(html);
        }
        catch (error) {
            return reply.code(500).send({
                success: false,
                message: "Error rendering invoice preview",
                error: error.message || error
            });
        }
    }
}
exports.default = new InvoiceController();
//# sourceMappingURL=invoice.controller.js.map