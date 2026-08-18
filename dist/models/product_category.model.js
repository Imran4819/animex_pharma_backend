"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class ProductCategoryModel extends sequelize_1.Model {
}
ProductCategoryModel.init({
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
    category_name: {
        type: sequelize_1.DataTypes.STRING(150),
        allowNull: false,
    },
    category_code: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
}, {
    sequelize: db_1.default,
    tableName: "product_categories",
    timestamps: true,
    paranoid: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
});
exports.default = ProductCategoryModel;
//# sourceMappingURL=product_category.model.js.map