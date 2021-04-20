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

module.exports = { Product };
