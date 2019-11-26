const express = require("express");
const app = express();
const { alternateCases } = require("./case-controller");
app.use(express.json());

app.get("/api", alternateCases);

module.exports = app;
