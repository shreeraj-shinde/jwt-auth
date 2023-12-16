const express = require("express");
const connection = require("./dbConnection");
const routes = require("./routes");
const dotenv = require("dotenv").config();
const app = express();
const Port = process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "hello World",
  });
});

app.use("/", routes);

app.listen(Port, () => {
  console.log("Server RUnning on PORT : ", Port);
});
