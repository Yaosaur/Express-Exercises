const express = require("express");
const app = express();

const magic8Res = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

function getRandomInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

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

app.get("/magic/:phrase", (req, res) => {
  res.send(
    `Question:${req.params.phrase} <h1>Answer: ${
      magic8Res[getRandomInclusive(0, magic8Res.length - 1)]
    }</h1>`
  );
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
