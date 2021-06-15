const express = require("express");
const router = express.Router();
const { Product } = require("../models/product.model.js");
const { json } = require("express");

router
  .route("/cakes")

  .get(async (req, res) => {
    try {
      const result = await Product.find({ category: "cake" });
      res.send(result);
    } catch (err) {
      res.send(err);
    }
  });
router
  .route("/cupcakes")

  .get(async (req, res) => {
    try {
      const result = await Product.find({ category: "cupcake" });
      res.send(result);
    } catch (err) {
      res.send(err);
    }
  });

router.route("/brownies").get(async (req, res) => {
  try {
    const result = await Product.find({ category: "brownie" });

    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

router.route("/cookies").get(async (req, res) => {
  try {
    const result = await Product.find({ category: "cookie" });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});
router
  .param("productId", async (req, res, next, productId) => {

    try {
      const product = await Product.findById(productId);

      if (!product) {
        return res
          .status(400)
          .json({ success: false, message: "product not found" });
      }

      req.item = product;
      next();
    } catch {
      res
        .status(400)
        .json({ success: false, message: "could not retrieve product " });
    }
  })

  .route("/:productId")

  .get(async (req, res) => {
    try {
      const { item } = req;

      res.status(200).json({ success: true, item });
    } catch (err) {
      res.status(404).send({ success: false });
    }
  });

module.exports = router;
