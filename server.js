import { createServer } from "http";
import { logger } from "./middlewares/logger.js";
import { jsonResponse } from "./middlewares/jsonResponse.js";
import {
  handleAllUsers,
  handleCreateUser,
  handleUserById,
} from "./controllers/users.js";

const PORT = process.env.PORT || 5002;

const server = createServer((req, res) => {
  logger(req, res, () => {
    if (req.method === "GET") {
      if (req.url === "/api") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to USER API!");
      } else if (req.url === "/api/users") {
        handleAllUsers(req, res);
      } else if (req.url.startsWith("/api/users/")) {
        handleUserById(req, res);
      } else {
        jsonResponse(res, 404, { error: "Route not found" });
      }
    } else if (req.method === "POST") {
      if (req.url === "/api/users") {
        handleCreateUser(req, res);
      }
    } else {
      jsonResponse(res, 500, { error: "Method not allowed" });
    }
  });
});

server.listen(PORT, () =>
  console.log(`Server successfully started on http://localhost:${PORT}/api`)
);

// s
