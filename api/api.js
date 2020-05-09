const express = require("express");
const http = require("http");
const mapRoutes = require("express-routes-mapper");

const enviroment = process.env.NODE_ENV;

const config = require("../config/config");

const app = express();
const server = http.Server(app);

const mappedOpenRoutes = mapRoutes(config.openRoutes, "api/controllers/");
const mappedAuthRoutes = mapRoutes(config.authRoutes, "./api/controllers/");

app.use("/api/public", mappedOpenRoutes);
app.use("/api", mappedAuthRoutes);

server.listen(config.port, () => {
  if (enviroment) {
    console.log(`Listening in ${enviroment} with port ${config.port}`);
  } else {
    console.error("ERROR: Invalid enviroment");
    process.exit(1);
  }
});
