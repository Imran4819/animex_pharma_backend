import MedicalProductModel from "../models/medical_product.model";
declare class MedicalProductService {
    createProduct(data: any): Promise<MedicalProductModel | null>;
    getAllProducts(query: any): Promise<MedicalProductModel[]>;
    getProductById(id: string, clientId?: string): Promise<MedicalProductModel | null>;
    updateProduct(id: string, data: any): Promise<MedicalProductModel | null>;
    deleteProduct(id: string, clientId?: string): Promise<boolean>;
}
declare const _default: MedicalProductService;
export default _default;
