const mongoose = require("mongoose");
const { Schema } = mongoose;

const WishlistSchema = new mongoose.Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User-sign-up" },

  products: [
    {
      quantity: {
        type: Number,
      },

      productid: { type: Schema.Types.ObjectId, ref: "Product" },
    },
  ],
});

const Wishlist = new mongoose.model("Wishlist", WishlistSchema);

module.exports = { Wishlist };
