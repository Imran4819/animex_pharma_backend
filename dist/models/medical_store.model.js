"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class MedicalStoreModel extends sequelize_1.Model {
}
MedicalStoreModel.init({
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
    firm_name: {
        type: sequelize_1.DataTypes.STRING(150),
        allowNull: false,
    },
    contact_person_name: {
        type: sequelize_1.DataTypes.STRING(150),
        allowNull: true,
    },
    phone_number: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false,
    },
    district: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    address: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
}, {
    sequelize: db_1.default,
    tableName: "medical_stores",
    timestamps: true,
    paranoid: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
});
exports.default = MedicalStoreModel;
//# sourceMappingURL=medical_store.model.js.map