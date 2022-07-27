const express = require("express");
const app = express();

app.get("/greeting", (req, res) => {
  res.send("Hello, Stranger");
});

app.get("/greeting/:name", (req, res) => {
  res.send(`Wow! Hello there, ${req.params.name}!`);
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
  res.send(
    `Tip = ${
      (parseInt(req.params.total) * parseInt(req.params.tipPercentage)) / 100
    }`
  );
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
