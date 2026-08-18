import { Model } from "sequelize";
declare class MedicalStoreModel extends Model {
    id: string;
    client_id: string;
    firm_name: string;
    contact_person_name: string | null;
    phone_number: string;
    district: string;
    address: string;
    status: boolean;
    readonly created_at: Date;
    readonly updated_at: Date;
    readonly deleted_at: Date | null;
}
export default MedicalStoreModel;
