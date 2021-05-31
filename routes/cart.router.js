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

      // const result = await Cart.find({ userId }).populate("id");
      // res.send(result);
    } catch (error) {
      res.status(404).json(error, "Something is wrong");
    }
  })

  .post(async (req, res) => {
    const { userId } = req.user;

    try {
      const { productId } = req.body;

      PostProduct(userId, productId, Cart, res);

      // await Product.findByIdAndUpdate(id, { cart: true });

      // const newCart = new Cart({ id: id, quantity: qnt });

      // await newCart.save();

      // res.send({ succcess: "ture" });
    } catch (error) {
      res.status(404).json(error, "Something is wrong");
    }
  })

  .delete(async (req, res) => {
    const { userId } = req.user;

    try {
      const { productId } = req.body;

      DeleteProduct(userId, productId, Cart, res);

      // await Product.findByIdAndUpdate(productId, { cart: false });
      // await Cart.findByIdAndDelete(cartProductId);

      // res.send({ succcess: "delete success" });
    } catch (error) {
      res.status(404).json(error, "Something is wrong");
    }
  });

router.route("/products").post(async (req, res) => {
  const { id, qnt } = req.body;

  await Product.findByIdAndUpdate(id, { cart: true });

  const newCart = new Cart({ id: id, quantity: qnt });

  await newCart.save();

  const product = await Product.findById(id);
  res.status(404).json(product);

  res.send(product);
});

module.exports = router;
