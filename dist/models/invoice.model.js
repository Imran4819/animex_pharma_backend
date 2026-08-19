"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../config/db"));
const client_model_1 = __importDefault(require("./client.model"));
const medical_store_model_1 = __importDefault(require("./medical_store.model"));
class InvoiceModel extends sequelize_1.Model {
}
InvoiceModel.init({
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
    medical_store_id: {
        type: sequelize_1.DataTypes.CHAR(36),
        allowNull: false,
        references: {
            model: "medical_stores",
            key: "id",
        },
    },
    invoice_number: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
    company_invoice_number: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    global_bill_id: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: true,
        unique: true,
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    items: {
        type: sequelize_1.DataTypes.JSONB,
        allowNull: false,
        defaultValue: [],
    },
    subtotal: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
    },
    discount: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
    },
    gst_rate: {
        type: sequelize_1.DataTypes.DECIMAL(5, 2),
        allowNull: false,
        defaultValue: 5.0,
    },
    gst_amount: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
    },
    taxable_amount: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
    },
    round_off: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
    },
    grand_total: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
    },
    received_amount: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
    },
    balance_due: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
    },
    payment_type: {
        type: sequelize_1.DataTypes.ENUM("Cash", "UPI", "Card", "Credit"),
        allowNull: false,
        defaultValue: "UPI",
    },
    status: {
        type: sequelize_1.DataTypes.ENUM("Paid", "Pending", "Partially Paid", "Cancelled"),
        allowNull: false,
        defaultValue: "Pending",
    },
    notes: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
}, {
    sequelize: db_1.default,
    tableName: "invoices",
    timestamps: true,
    paranoid: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
});
// Associations
InvoiceModel.belongsTo(client_model_1.default, {
    foreignKey: "client_id",
    as: "client",
});
InvoiceModel.belongsTo(medical_store_model_1.default, {
    foreignKey: "medical_store_id",
    as: "medical_store",
});
medical_store_model_1.default.hasMany(InvoiceModel, {
    foreignKey: "medical_store_id",
    as: "invoices",
});
exports.default = InvoiceModel;
//# sourceMappingURL=invoice.model.js.map