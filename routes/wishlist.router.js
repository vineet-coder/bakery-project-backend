const express = require("express");
const router = express.Router();
const { Wishlist } = require("../models/wishlist.model.js");
const { Product } = require("../models/product.model.js");
const {
  PostProduct,
  GetData,
  DeleteProduct,
} = require("../controllers/productController.js");

router
  .route("/")

  .get(async (req, res) => {
    const { userId } = req.user;

    try {
      GetData(Wishlist, userId, res);
    } catch (error) {
      res.status(404).json(error, "Something is wrong");
    }
  })

  .post(async (req, res) => {
    const { userId } = req.user;

    try {
      const { productId, quantity } = req.body;

      PostProduct(userId, productId, quantity, Wishlist, res);
    } catch (error) {
      res.status(404).json(error, "Something is wrong");
    }
  })

  .delete(async (req, res) => {
    const { userId } = req.user;

    try {
      const { productId } = req.body;

      DeleteProduct(userId, productId, Wishlist, res);
    } catch (error) {
      res.status(404).json(error, "Something is wrong");
    }
  });

router.route("/products").post(async (req, res) => {
  const { id } = req.body;

  await Product.findByIdAndUpdate(id, { wishlist: true });

  const newWishlistProduct = new Wishlist({ id: id });

  await newWishlistProduct.save();

  const product = await Product.findById(id);

  res.send(product);
});

module.exports = router;
