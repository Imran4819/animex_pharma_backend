"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadsDir = exports.removeUploadedFile = exports.upload = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const multer_1 = __importDefault(require("multer"));
const uploadsDir = path_1.default.resolve(process.cwd(), 'src', 'image', 'uploads');
exports.uploadsDir = uploadsDir;
if (!fs_1.default.existsSync(uploadsDir)) {
    fs_1.default.mkdirSync(uploadsDir, { recursive: true });
}
const storage = multer_1.default.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, uploadsDir);
    },
    filename: (_req, file, cb) => {
        const safeName = path_1.default.basename(file.originalname).replace(/[^a-zA-Z0-9._-]/g, '_');
        cb(null, `${Date.now()}-${Math.round(Math.random() * 1e9)}-${safeName}`);
    }
});
const allowedMimeTypes = new Set(['image/jpeg', 'image/png', 'image/jpg', 'image/webp', 'image/gif']);
exports.upload = (0, multer_1.default)({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024
    },
    fileFilter: (_req, file, cb) => {
        if (!allowedMimeTypes.has(file.mimetype)) {
            cb(new Error('Only image files are allowed'));
            return;
        }
        cb(null, true);
    }
});
const removeUploadedFile = async (fileName) => {
    if (!fileName) {
        return;
    }
    const filePath = path_1.default.join(uploadsDir, fileName);
    try {
        await fs_1.default.promises.unlink(filePath);
    }
    catch {
        // Ignore missing files so cleanup stays idempotent.
    }
};
exports.removeUploadedFile = removeUploadedFile;
//# sourceMappingURL=storage.js.map