const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.json());    // to parse JSON bodies
app.use("/api", routes);    // mount all routes under /api

module.exports = app;
