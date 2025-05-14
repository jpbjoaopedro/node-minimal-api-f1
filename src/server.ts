import fastify from "fastify";
import { teams } from "./repository/teams";
import { drivers } from "./repository/drivers";

const server = fastify({ logger: true });

server.get("/teams", async (req, res) => {
  res.type("application/json").code(200);

  return { teams };
});

server.get("/drivers", async (req, res) => {
    res.type("application/json").code(200);

    return { drivers }
});

interface DriverParams {
    id: string
}

server.get<{Params: DriverParams}>("/drivers/:id", async (req, res) => {
    const idParam = parseInt(req.params.id);
    const driver = drivers.find((d) => d.id === idParam )

    if(!driver) {
        res.type("application/json").code(204)
        return { message: "Driver Not Found" }
    } else {
        res.type("application/json").code(200)
        return { driver }
    }


});

const PORT = process.env.PORT
server.listen({ port: 3333 }, () => {
    console.log(`Server is running on port ${PORT}`);
});