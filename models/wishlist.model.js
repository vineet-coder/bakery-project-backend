const mongoose = require("mongoose");
const { Schema } = mongoose;

const WishlistSchema = new mongoose.Schema({
  id: { type: Schema.Types.ObjectId, ref: "Product" },
});

const WishlistProduct = new mongoose.model("WishlistProduct", WishlistSchema);

module.exports = { WishlistProduct };
