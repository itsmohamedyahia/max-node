const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   console.log("in a middleware");
//   next();
// });
// app.use((req, res, next) => {
//   console.log(" in another middleware");
//   res.send("hello from the other side");
// });

app.get("/", (req, res, next) => {
  res.send("look whos here");
});
app.get("/users", (req, res, next) => {
  res.send("well well well if it aint the invisible ****, oi");
});

app.listen(3020);
