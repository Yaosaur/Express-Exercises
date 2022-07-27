const express = require("express");
const app = express();

app.get("/greeting", (req, res) => {
  res.send("Hello, Stranger");
});

app.get("/greeting/:name", (req, res) => {
  res.send(`Wow! Hello there, ${req.params.name}!`);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
