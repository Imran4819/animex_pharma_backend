import { Model } from "sequelize";
declare class MedicalProductModel extends Model {
    id: string;
    client_id: string;
    category_id: string;
    product_title: string;
    unit: "Ltr" | "ml" | "Kg" | "gm" | "Piece" | "Box" | "Bottle" | "Strip" | "Tablet";
    mrp: number;
    selling_price: number;
    quantity: number;
    status: boolean;
    readonly created_at: Date;
    readonly updated_at: Date;
    readonly deleted_at: Date | null;
}
export default MedicalProductModel;
