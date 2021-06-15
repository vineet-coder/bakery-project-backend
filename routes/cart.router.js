const express = require("express");
const router = express.Router();
const { Product } = require("../models/product.model.js");
const { Cart } = require("../models/cart.model.js");
const {
  GetData,
  PostProduct,
  DeleteProduct,
} = require("../controllers/productController.js");
const { Collection } = require("mongoose");

router
  .route("/")

  .get(async (req, res) => {
    const { userId } = req.user;
    try {
      GetData(Cart, userId, res);
    } catch (error) {
      res.status(404).json(error, "Something is wrong");
    }
  })

  .post(async (req, res) => {
    const { userId } = req.user;

    try {
      const { productId, quantity } = req.body;
      PostProduct(userId, productId, quantity, Cart, res);
    } catch (error) {
      res.status(404).json(error, "Something is wrong");
    }
  })

  .delete(async (req, res) => {
    const { userId } = req.user;

    try {
      const { productId } = req.body;

      DeleteProduct(userId, productId, Cart, res);

    } catch (error) {
      res.status(404).json(error, "Something is wrong");
    }
  });

router.route("/products").post(async (req, res) => {
  const { userId } = req.user;

  try {
    const { product_Id, updatedQuantity } = req.body;

    await Cart.updateOne(
      { "products._id": product_Id },
      { $set: { "products.$.quantity": updatedQuantity } },
      (err) => {
        if (err) {
          res.status(500).json({ error: "Unable to update competitor." });
        }
      }
    );
    const result = await Cart.find({ userId }).populate({
      path: "products.productid",
      model: "Product",
    });
    res.status(200).json({ success: true, message: "your data", result });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
