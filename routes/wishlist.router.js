const express = require("express");
const router = express.Router();
const { WishlistProduct } = require("../models/wishlist.model.js");
const { Product } = require("../models/product.model.js");

router
  .route("/")

  .get(async (req, res) => {
    try {
      const result = await WishlistProduct.find().populate("id");
      res.send(result);
    } catch (error) {
      console.log(error);
    }
  })

  .post(async (req, res) => {
    try {
      const { id } = req.body;

      await Product.findByIdAndUpdate(id, { wishlist: true });

      const newWishlistProduct = new WishlistProduct({ id: id });

      await newWishlistProduct.save();

      res.send({ succcess: "save to wishlsit" });
    } catch (error) {
      console.log(error);
    }
  })

  .delete(async (req, res) => {
    try {
      const { wishlistProductId, productId } = req.body;
      //   console.log({ id });

      await Product.findByIdAndUpdate(productId, { wishlist: false });
      await WishlistProduct.findByIdAndDelete(wishlistProductId);

      res.send({ succcess: "delete success" });
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router;
