"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
const roles_constant_1 = require("../utils/roles-constant");
class UserModel extends sequelize_1.Model {
}
UserModel.init({
    id: {
        type: sequelize_1.DataTypes.CHAR(36),
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    client_id: {
        type: sequelize_1.DataTypes.CHAR(36),
        allowNull: true,
        defaultValue: null,
        references: {
            model: "clients",
            key: "id",
        },
    },
    name: {
        type: sequelize_1.DataTypes.STRING(150),
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING(150),
        allowNull: true,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true,
    },
    phone: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: true,
        unique: true,
    },
    role: {
        type: sequelize_1.DataTypes.STRING(50),
        defaultValue: "businessowner",
        validate: {
            isIn: [roles_constant_1.ROLES_LIST]
        }
    },
    enabled: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true,
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
    tableName: "users",
    timestamps: false,
});
exports.default = UserModel;
//# sourceMappingURL=user.model.js.map