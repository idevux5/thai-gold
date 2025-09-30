// src/routers/price.ts
import { FastifyInstance } from "fastify";

export default async function priceRoutes(fastify: FastifyInstance) {
  fastify.get("/price", async (request, reply) => {
    return { gold: "ราคาทองวันนี้" };
  });
}
