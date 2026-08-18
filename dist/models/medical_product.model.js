"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
const product_category_model_1 = __importDefault(require("./product_category.model"));
class MedicalProductModel extends sequelize_1.Model {
}
MedicalProductModel.init({
    id: {
        type: sequelize_1.DataTypes.CHAR(36),
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    client_id: {
        type: sequelize_1.DataTypes.CHAR(36),
        allowNull: false,
        references: {
            model: "clients",
            key: "id",
        },
    },
    category_id: {
        type: sequelize_1.DataTypes.CHAR(36),
        allowNull: false,
        references: {
            model: "product_categories",
            key: "id",
        },
    },
    product_title: {
        type: sequelize_1.DataTypes.STRING(150),
        allowNull: false,
    },
    unit: {
        type: sequelize_1.DataTypes.ENUM("Ltr", "ml", "Kg", "gm", "Piece", "Box", "Bottle", "Strip", "Tablet"),
        allowNull: false,
    },
    mrp: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    selling_price: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    quantity: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
}, {
    sequelize: db_1.default,
    tableName: "medical_products",
    timestamps: true,
    paranoid: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
});
// Associations
MedicalProductModel.belongsTo(product_category_model_1.default, {
    foreignKey: "category_id",
    as: "category",
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
});
product_category_model_1.default.hasMany(MedicalProductModel, {
    foreignKey: "category_id",
    as: "products",
});
exports.default = MedicalProductModel;
//# sourceMappingURL=medical_product.model.js.map