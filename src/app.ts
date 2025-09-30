import Fastify from "fastify";
import priceRoutes from "./routers/price";

export default function buildApp(options = {}) {
  const app = Fastify(options);

  app.register(priceRoutes);

  return app;
}
