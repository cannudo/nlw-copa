"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
async function start() {
    const fastify = (0, fastify_1.default)({
        logger: true,
    });
    await fastify.listen({
        port: 3333
    });
}
start();
