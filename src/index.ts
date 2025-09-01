import httpServer from "node:http";
import app from "./app";

const server = httpServer.createServer(app);

server.listen(2000, () => {
  console.log(`Server is running on port 2000`);
});
