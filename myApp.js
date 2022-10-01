let express = require("express");
let app = express();

module.exports = app;

console.log("Hello World");
console.log(__dirname);

app.get("/", (req, res) => {
  res.send("Hello Express");
});
