const express = require("express");

const app = express();

app.get("/roshambo", function (req, res) {
  console.log("In Here");
});

app.listen(3000);
