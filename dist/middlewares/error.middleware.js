"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const sequelize_1 = require("sequelize");
const jsonwebtoken_1 = require("jsonwebtoken");
const app_error_util_1 = require("../utils/app-error.util");
const response_util_1 = require("../utils/response.util");
const errorMiddleware = (error, _req, res, next) => {
    if (res.headersSent) {
        next(error);
        return;
    }
    let statusCode = 500;
    let message = 'Internal server error';
    let details = null;
    if (error instanceof app_error_util_1.AppError) {
        statusCode = error.statusCode;
        message = error.message;
        details = error.details;
    }
    else if (error instanceof sequelize_1.UniqueConstraintError) {
        statusCode = 409;
        message = 'A record with the same value already exists';
        details = error.errors.map((item) => ({
            field: item.path,
            message: item.message
        }));
    }
    else if (error instanceof sequelize_1.ValidationError) {
        statusCode = 400;
        message = 'Database validation failed';
        details = error.errors.map((item) => item.message);
    }
    else if (error instanceof sequelize_1.ForeignKeyConstraintError) {
        statusCode = 409;
        message = 'Foreign key constraint failed';
        details = error.message;
    }
    else if (error instanceof jsonwebtoken_1.JsonWebTokenError || error instanceof jsonwebtoken_1.TokenExpiredError) {
        statusCode = 401;
        message = 'Invalid or expired token';
        details = error.message;
    }
    else if (error instanceof Error) {
        message = error.message || message;
    }
    if (statusCode >= 500) {
        console.error(error);
    }
    (0, response_util_1.sendError)(res, message, details, statusCode);
};
exports.errorMiddleware = errorMiddleware;
//# sourceMappingURL=error.middleware.js.map