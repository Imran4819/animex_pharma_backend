import { Model } from "sequelize";
declare class InvoiceModel extends Model {
    id: string;
    client_id: string;
    medical_store_id: string;
    invoice_number: string;
    company_invoice_number: number | null;
    global_bill_id: number | null;
    date: Date;
    items: any;
    subtotal: number;
    discount: number;
    gst_rate: number;
    gst_amount: number;
    taxable_amount: number;
    round_off: number;
    grand_total: number;
    received_amount: number;
    balance_due: number;
    payment_type: "Cash" | "UPI" | "Card" | "Credit";
    status: "Paid" | "Pending" | "Partially Paid" | "Cancelled";
    notes: string | null;
    readonly created_at: Date;
    readonly updated_at: Date;
    readonly deleted_at: Date | null;
}
export default InvoiceModel;
