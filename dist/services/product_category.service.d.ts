import ProductCategoryModel from "../models/product_category.model";
declare class ProductCategoryService {
    createCategory(data: any): Promise<ProductCategoryModel>;
    getAllCategories(query: any): Promise<ProductCategoryModel[]>;
    getCategoryById(id: string, clientId?: string): Promise<ProductCategoryModel | null>;
    updateCategory(id: string, data: any): Promise<ProductCategoryModel | null>;
    deleteCategory(id: string, clientId?: string): Promise<boolean>;
}
declare const _default: ProductCategoryService;
export default _default;
