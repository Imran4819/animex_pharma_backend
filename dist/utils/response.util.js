"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendError = exports.sendSuccess = exports.sendResponse = void 0;
const sendResponse = (res, statusCode, payload) => {
    return res.status(statusCode).json(payload);
};
exports.sendResponse = sendResponse;
const sendSuccess = (res, message, data, statusCode = 200) => {
    return (0, exports.sendResponse)(res, statusCode, {
        success: true,
        message,
        data,
        error: null
    });
};
exports.sendSuccess = sendSuccess;
const sendError = (res, message, error = null, statusCode = 400) => {
    return (0, exports.sendResponse)(res, statusCode, {
        success: false,
        message,
        data: null,
        error
    });
};
exports.sendError = sendError;
//# sourceMappingURL=response.util.js.map