const express = require("express");
const app = express();
const cors = require("cors");
const Port = 8000;
const mongoose = require("mongoose");
const { Product } = require("./models/product.model.js");
app.use(express.json());
app.use(cors());
const products = require("./routes/products.router.js");

app.get("/", (req, res) => {
  res.send("Hello moto");
});

const { initializeDbConnection } = require("./db/db.connection.js");

initializeDbConnection();

app.use("/api", products);

app.listen(Port, () => {
  console.log(`Example app listening at ${Port}`);
});
