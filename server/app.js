const express = require("express");
const logger = require("morgan");
const routes = require("./routes");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const PORT = process.env.PORT || 5000;
// app.use(express.static("public"));

app.use(logger("dev"));
app.use("/api", routes);

module.exports = app;
