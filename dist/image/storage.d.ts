import multer from 'multer';
declare const uploadsDir: string;
export declare const upload: multer.Multer;
export declare const removeUploadedFile: (fileName: string) => Promise<void>;
export { uploadsDir };
