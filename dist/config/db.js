"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = exports.sequelize = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_1 = require("sequelize");
dotenv_1.default.config();
const dbUrl = process.env.DATABASE_URL || process.env.DB_URL;
exports.sequelize = dbUrl
    ? new sequelize_1.Sequelize(dbUrl, {
        dialect: 'postgres',
        logging: false,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    })
    : new sequelize_1.Sequelize(process.env.DB_NAME || 'neondb', process.env.DB_USER || 'neondb_owner', process.env.DB_PASSWORD || 'npg_ZNtxSoV20lFK', {
        host: process.env.DB_HOST || 'ep-rough-sky-axiwu1ua-pooler.c-4.us-east-2.aws.neon.tech',
        port: Number(process.env.DB_PORT || 5432),
        dialect: 'postgres',
        logging: false,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    });
const connectDatabase = async () => {
    await exports.sequelize.authenticate();
};
exports.connectDatabase = connectDatabase;
exports.default = exports.sequelize;
//# sourceMappingURL=db.js.map