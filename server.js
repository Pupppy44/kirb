const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.send("It's a secret to everyone");
});

app.listen(process.env.PORT);
