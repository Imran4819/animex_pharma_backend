import { Model } from "sequelize";
declare class ProductCategoryModel extends Model {
    id: string;
    client_id: string;
    category_name: string;
    category_code: string | null;
    description: string | null;
    status: boolean;
    readonly created_at: Date;
    readonly updated_at: Date;
    readonly deleted_at: Date | null;
}
export default ProductCategoryModel;
