const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartSchema = new mongoose.Schema({
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

const Cart = new mongoose.model("Cart", cartSchema);

module.exports = { Cart };
