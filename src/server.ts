import fastify from "fastify";
import { teams } from "./repository/teams";
import { drivers } from "./repository/drivers";

const server = fastify({ logger: true });

server.get("/teams", async (request, response) => {
  response.type("application/json").code(200);

  return { teams };
});

server.get("/drivers", async (request, response) => {
    response.type("application/json").code(200);

    return { drivers }
});

const PORT = process.env.PORT
server.listen({ port: 3333 }, () => {
    console.log(`Server is running on port ${PORT}`);
});