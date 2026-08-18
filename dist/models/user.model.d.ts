import { Model } from "sequelize";
declare class UserModel extends Model {
    id: string;
    client_id: string | null;
    name: string;
    email: string | null;
    password: string | null;
    phone: string | null;
    role: string;
    enabled: boolean;
    readonly created_at: Date;
    readonly updated_at: Date;
}
export default UserModel;
