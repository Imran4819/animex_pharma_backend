import MedicalStoreModel from "../models/medical_store.model";
declare class MedicalStoreService {
    createStore(data: any): Promise<MedicalStoreModel>;
    getAllStores(query: any): Promise<MedicalStoreModel[]>;
    getStoreById(id: string, clientId?: string): Promise<MedicalStoreModel | null>;
    updateStore(id: string, data: any): Promise<MedicalStoreModel | null>;
    deleteStore(id: string, clientId?: string): Promise<boolean>;
}
declare const _default: MedicalStoreService;
export default _default;
