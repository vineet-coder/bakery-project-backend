const express = require("express");
const app = express();
const Port = 8000;
const mongoose = require("mongoose");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello moto");
});

mongoose
  .connect(
    "mongodb+srv://vineet:cookiesbakery@cluster0.ymbhv.mongodb.net/shopstack?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("successfully connected"))
  .catch((error) => console.error("mongoose connection failed...", error));

const productSchema = new mongoose.Schema({
  category: String,

  quantity: Number,
  wishlist: Boolean,
  cart: Boolean,

  isReady: Boolean,

  ready: String,

  isDiscount: Boolean,

  discount: Number,

  isPopulor: Boolean,

  name: String,

  //   image: [
  //     "./brownie/Classic-Chocolatey-Brownies1.jpg",
  //     "./brownie/Classic-Chocolatey-Brownies2.jpg",
  //   ],

  image: [String],

  price: Number,

  //   Description: {
  //     Details: [" No of Pieces- 6 Pieces", "Size- Approx 75 gm"],
  //     Instructions: [
  //       "Upon receiving the brownies, immediately refrigerate it",
  //       "Leave it in the fridge until it is time to cut and serve",
  //       "The brownies should be placed back in the fridge and should be consumed within 48 hours",
  //       "Enjoy your Brownies!",
  //     ],
  //   },

  Description: {
    Details: [String],
    Instructions: [String],
  },
});

const Product = new mongoose.model("Product", productSchema);

app.post("/CAKE", async (req, res) => {
  try {
    // req.body
    const newProduct = new Product({
      category: "cupcake",

      quantity: 1,

      wishlist: false,

      isReady: true,

      ready: "READY TO EAT",

      isDiscount: false,

      discount: 0,

      isPopulor: false,

      cart: false,

      name: "Oreo And Chocolate CupCake",
      image: [
        "./cupcake/Oreo-And-Chocolate-CupCake1.jpg",
        "./cupcake/Oreo-And-Chocolate-CupCake2.jpg",
      ],
      price: 499,
      Description: {
        Details: [
          " 6 Pcs of Cupcakes",
          "Cupcake Flavour- Oreo And Chocolate",
          "Red Velvet Base with Cheese Cream Frosting",
          "Decorated with Fruits",
        ],
        Instructions: [
          "Upon receiving the cupcake, immediately refrigerate it",
          "Leave it in the fridge until it is time to consume.",
          "The cup cake should be placed back in the fridge and should be consumed within 24 hours",
          "Enjoy your cupcake!",
        ],
      },
    });

    const result = await newProduct.save();
    res.status(201).send(result);
  } catch (err) {
    res.status(404).send(err);
  }
});

app.get("/CUPCAKE", async (req, res) => {
  try {
    const result = await Product.find({ category: "cupcake" });
    res.send(result);
    console.log(result);
  } catch (err) {
    res.send(err);
  }
});

app.get("/CAKE", async (req, res) => {
  try {
    const result = await Product.find({ category: "cake" });
    res.send(result);
    console.log(result);
  } catch (err) {
    res.send(err);
  }
});
app.get("/BROWNIE", async (req, res) => {
  try {
    console.log("here");
    const result = await Product.find({ category: "brownie" });
    console.log(result);

    res.send(result);
  } catch (err) {
    res.send(err);
  }
});
app.get("/COOKIE", async (req, res) => {
  try {
    const result = await Product.find({ category: "cookie" });
    res.send(result);
    console.log(result);
  } catch (err) {
    res.send(err);
  }
});

app.listen(Port, () => {
  console.log(`Example app listening at ${Port}`);
});
