import { Model } from "sequelize";
declare class ClientModel extends Model {
    id: string;
    name: string;
    email: string | null;
    phone: string | null;
    address: string | null;
    city: string | null;
    status: "active" | "inactive";
    readonly created_at: Date;
    readonly updated_at: Date;
}
export default ClientModel;
