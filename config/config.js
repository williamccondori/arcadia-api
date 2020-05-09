const openRoutes = require("./routes/openRoutes");
const authRoutes = require("./routes/authRoutes");

const config = {
  openRoutes,
  authRoutes,
  migrate: false,
  port: process.env.PORT || "3000",
};

module.exports = config;
