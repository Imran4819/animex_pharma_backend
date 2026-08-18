"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPaginationMeta = exports.parseLimit = exports.parsePage = void 0;
const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 10;
const MAX_LIMIT = 100;
const parsePage = (value) => {
    const parsed = Number(value);
    if (!Number.isFinite(parsed) || parsed < 1) {
        return DEFAULT_PAGE;
    }
    return Math.floor(parsed);
};
exports.parsePage = parsePage;
const parseLimit = (value) => {
    const parsed = Number(value);
    if (!Number.isFinite(parsed) || parsed < 1) {
        return DEFAULT_LIMIT;
    }
    return Math.min(Math.floor(parsed), MAX_LIMIT);
};
exports.parseLimit = parseLimit;
const buildPaginationMeta = (total, page, limit) => {
    return {
        page,
        limit,
        total,
        total_pages: Math.max(Math.ceil(total / limit), 1)
    };
};
exports.buildPaginationMeta = buildPaginationMeta;
//# sourceMappingURL=pagination.util.js.map