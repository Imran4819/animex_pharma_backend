import MedicalProductModel from "../models/medical_product.model";
import ProductCategoryModel from "../models/product_category.model";
import { Op } from "sequelize";

class MedicalProductService {

    // CREATE
    async createProduct(data: any) {
        const product = await MedicalProductModel.create({
            client_id: data.client_id,
            category_id: data.category_id,
            product_title: data.product_title,
            unit: data.unit,
            mrp: data.mrp,
            selling_price: data.selling_price,
            status: data.status !== undefined ? (data.status === "true" || data.status === true) : true,
        });

        return await this.getProductById(product.id, data.client_id);
    }

    // GET ALL WITH FILTERS
    async getAllProducts(query: any) {
        const whereCondition: any = {};

        if (query.client_id) {
            whereCondition.client_id = query.client_id;
        }

        if (query.category_id) {
            whereCondition.category_id = query.category_id;
        }

        if (query.product_title) {
            whereCondition.product_title = {
                [Op.iLike]: `%${query.product_title}%`
            };
        }

        if (query.status !== undefined) {
            whereCondition.status = query.status === "true" || query.status === true;
        }

        const products = await MedicalProductModel.findAll({
            where: whereCondition,
            include: [
                {
                    model: ProductCategoryModel,
                    as: "category",
                    attributes: ["id", "category_name", "category_code"],
                }
            ],
            order: [["created_at", "DESC"]],
        });

        return products;
    }

    // GET BY ID
    async getProductById(id: string, clientId?: string) {
        const whereCondition: any = { id };

        if (clientId) {
            whereCondition.client_id = clientId;
        }

        return await MedicalProductModel.findOne({
            where: whereCondition,
            include: [
                {
                    model: ProductCategoryModel,
                    as: "category",
                    attributes: ["id", "category_name", "category_code"],
                }
            ],
        });
    }

    // UPDATE
    async updateProduct(id: string, data: any) {
        const updateData: any = {};

        if (data.category_id !== undefined) updateData.category_id = data.category_id;
        if (data.product_title !== undefined) updateData.product_title = data.product_title;
        if (data.unit !== undefined) updateData.unit = data.unit;
        if (data.mrp !== undefined) updateData.mrp = data.mrp;
        if (data.selling_price !== undefined) updateData.selling_price = data.selling_price;
        if (data.status !== undefined) {
            updateData.status = data.status === "true" || data.status === true;
        }

        await MedicalProductModel.update(updateData, {
            where: data.client_id ? { id, client_id: data.client_id } : { id },
        });

        return await this.getProductById(id, data.client_id);
    }

    // DELETE
    async deleteProduct(id: string, clientId?: string) {
        await MedicalProductModel.destroy({
            where: clientId ? { id, client_id: clientId } : { id },
        });

        return true;
    }
}

export default new MedicalProductService();
