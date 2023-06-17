const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

const route = require("./routes/main");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(route);

const port = 3050;
app.listen(port);

require("openurl").open(`http://localhost:${port}/`);
