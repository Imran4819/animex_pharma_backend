import type { Response } from 'express';
import type { ApiResponse } from '../interface/common.interface';
export declare const sendResponse: <T>(res: Response, statusCode: number, payload: ApiResponse<T>) => Response;
export declare const sendSuccess: <T>(res: Response, message: string, data: T, statusCode?: number) => Response;
export declare const sendError: (res: Response, message: string, error?: unknown, statusCode?: number) => Response;
