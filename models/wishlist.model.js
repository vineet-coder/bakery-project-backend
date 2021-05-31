const mongoose = require("mongoose");
const { Schema } = mongoose;

const WishlistSchema = new mongoose.Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User-sign-up" },

  wishlistPoducts: [{ type: Schema.Types.ObjectId, ref: "Product" }],
});

const WishlistProduct = new mongoose.model("WishlistProduct", WishlistSchema);

module.exports = { WishlistProduct };
