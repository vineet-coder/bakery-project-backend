const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartSchema = new mongoose.Schema({
  id: { type: Schema.Types.ObjectId, ref: "Product" },
  quantity: Number,
});

const Cart = new mongoose.model("Cart", cartSchema);

module.exports = { Cart };
