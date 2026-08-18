import { FastifyRequest, FastifyReply } from "fastify";
declare class InvoiceController {
    createInvoice(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    getAllInvoices(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    getInvoiceById(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    updateInvoice(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    deleteInvoice(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    downloadInvoicePdf(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    previewInvoiceHtml(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
declare const _default: InvoiceController;
export default _default;
