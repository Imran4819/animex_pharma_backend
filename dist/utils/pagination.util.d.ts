import type { PaginationMeta } from '../interface/common.interface';
export declare const parsePage: (value: unknown) => number;
export declare const parseLimit: (value: unknown) => number;
export declare const buildPaginationMeta: (total: number, page: number, limit: number) => PaginationMeta;
