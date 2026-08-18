import InvoiceModel from "../models/invoice.model";
declare class InvoiceService {
    createInvoice(data: any): Promise<InvoiceModel | null>;
    getAllInvoices(query: any): Promise<InvoiceModel[]>;
    getInvoiceById(id: string, clientId?: string): Promise<InvoiceModel | null>;
    updateInvoice(id: string, data: any): Promise<InvoiceModel | null>;
    deleteInvoice(id: string, clientId?: string): Promise<boolean>;
    numberToWords(num: number): string;
    renderInvoiceHtml(invoice: any): string;
    generateInvoicePdf(invoice: any): Promise<Buffer>;
}
declare const _default: InvoiceService;
export default _default;
