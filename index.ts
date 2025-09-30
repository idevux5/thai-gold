// src/routers/price.ts
import { FastifyInstance } from "fastify";

export default async function priceRoutes(fastify: FastifyInstance) {
  fastify.get("/price", async (request, reply) => {
    return { gold: "ราคาทองวันนี้" };
  });
}


const app = buildApp(options);

app.listen(CONFIG.PORT, "0.0.0.0", (error) => {
  if (error) {
    console.log(error);
    process.exit(1);
  }
  console.log("Server running at port %d.", CONFIG.PORT);
});
