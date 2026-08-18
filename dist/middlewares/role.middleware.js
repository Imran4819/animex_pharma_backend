"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleMiddleware = roleMiddleware;
function roleMiddleware(allowedRoles) {
    return async (request, reply) => {
        const user = request.user;
        if (!user || !user.role) {
            return reply.status(403).send({
                success: false,
                message: "Access denied. No role found."
            });
        }
        const hasRole = allowedRoles.map(r => r.toLowerCase()).includes(user.role.toLowerCase());
        if (!hasRole) {
            return reply.status(403).send({
                success: false,
                message: "Access denied. Unauthorized role."
            });
        }
    };
}
//# sourceMappingURL=role.middleware.js.map