import { FastifyReply, FastifyRequest } from "fastify";
export declare function roleMiddleware(allowedRoles: string[]): (request: FastifyRequest, reply: FastifyReply) => Promise<undefined>;
