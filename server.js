const express = require("express");
const { resolve } = require("path");
const app = express();

app.use("/", express.static(resolve(__dirname, "./public")));
app.use(express.static(__dirname + "/node_modules"));

app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    return console.log(err);
  }
});
