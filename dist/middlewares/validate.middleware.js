"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const express_validator_1 = require("express-validator");
const app_error_util_1 = require("../utils/app-error.util");
const validateRequest = (req, _res, next) => {
    const result = (0, express_validator_1.validationResult)(req);
    if (!result.isEmpty()) {
        next(new app_error_util_1.AppError(400, 'Validation failed', {
            errors: result.array().map((error) => ({
                field: error.type === 'field' ? error.path : undefined,
                message: error.msg,
                value: error.type === 'field' ? error.value : undefined
            }))
        }));
        return;
    }
    next();
};
exports.validateRequest = validateRequest;
//# sourceMappingURL=validate.middleware.js.map