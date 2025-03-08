const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const app = express();

app.set("port", 3000);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/events", require("./routes/event.routes"));
app.use("/tickets", require("./routes/ticket.routes"));
app.use("/users", require("./routes/user.routes"));

app.use(express.static(path.join(__dirname, "static")));

module.exports = app;
