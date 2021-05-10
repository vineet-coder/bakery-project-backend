const mongoose = require("mongoose");

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

  image: [String],

  price: Number,

  Description: {
    Details: [String],
    Instructions: [String],
  },
});

const Product = new mongoose.model("Product", productSchema);

module.exports = { Product };
