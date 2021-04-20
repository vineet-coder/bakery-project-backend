const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
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

const Cart = new mongoose.model("Cart", cartSchema);

module.exports = { Cart };
