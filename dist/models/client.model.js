"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
class ClientModel extends sequelize_1.Model {
}
ClientModel.init({
    id: {
        type: sequelize_1.DataTypes.CHAR(36),
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING(150),
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING(150),
        allowNull: true,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    phone: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: true,
    },
    address: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true,
    },
    city: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM("active", "inactive"),
        allowNull: false,
        defaultValue: "active",
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    updated_at: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
}, {
    sequelize: db_1.default,
    tableName: "clients",
    timestamps: false,
});
exports.default = ClientModel;
//# sourceMappingURL=client.model.js.map