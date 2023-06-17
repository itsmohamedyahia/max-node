const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

const someRoute = require("./routes/someRoute");
app.use(someRoute);

app.listen(3030);
