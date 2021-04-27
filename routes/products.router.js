const express = require("express");
const router = express.Router();
const { Product } = require("../models/product.model.js");
const { Cart } = require("../models/cart.model.js");
const { json } = require("express");

router
  .route("/cakes")
  // .post(async (req, res) => {
  //   try {
  //     req.body;
  //     const newProduct = new Product({
  //       category: "aaaaa",

  //       quantity: 1,

  //       wishlist: false,

  //       isReady: true,

  //       ready: "READY TO EAT",

  //       isDiscount: false,

  //       discount: 0,

  //       isPopulor: false,

  //       cart: false,

  //       name: "Oreo And Chocolate CupCake",
  //       image: [
  //         "./cupcake/Oreo-And-Chocolate-CupCake1.jpg",
  //         "./cupcake/Oreo-And-Chocolate-CupCake2.jpg",
  //       ],
  //       price: 499,
  //       Description: {
  //         Details: [
  //           " 6 Pcs of Cupcakes",
  //           "Cupcake Flavour- Oreo And Chocolate",
  //           "Red Velvet Base with Cheese Cream Frosting",
  //           "Decorated with Fruits",
  //         ],
  //         Instructions: [
  //           "Upon receiving the cupcake, immediately refrigerate it",
  //           "Leave it in the fridge until it is time to consume.",
  //           "The cup cake should be placed back in the fridge and should be consumed within 24 hours",
  //           "Enjoy your cupcake!",
  //         ],
  //       },
  //     });

  //     const result = await newProduct.save();
  //     res.status(201).send(result);
  //   } catch (err) {
  //     res.status(404).send(err);
  //   }
  // })
  .get(async (req, res) => {
    try {
      const result = await Product.find({ category: "cake" });
      res.send(result);
      console.log(result);
    } catch (err) {
      res.send(err);
    }
  });



// router.param("productId", async (req, res, next, productId) => {
//   console.log("here", productId);

//   try {
//     const product = await Product.findById(productId);
//     if (!product) {
//       return res
//         .status(400)
//         .json({ success: false, message: "product not found" });
//     }

//     req.item = product;
//     next();
//   } catch {
//     res
//       .status(400)
//       .json({ success: false, message: "could not retrieve product " });
//   }
// });

// .route("/itemincarts")

// .post(async (req, res) => {
//   try {
// const { productId } = req.body;
// const product = await Product.findById(productId);
// console.log({ product });
// const { item } = req;
// const { _id, __v, ...tempitem } = item;
// console.log({ tempitem });
// item._id = undefined;
// item.__v = undefined;

// const newItem = JSON.stringify(item);
// console.log(newItem);

// const newCart = new Cart(item);

// console.log({ item });

// const newCart = new Cart({
//   category: "rammm",
//   _id: "607f2ea1f4d6ad45e8ca4f90",

//   quantity: 1,

//   wishlist: false,

//   isReady: true,

//   ready: "READY TO EAT",

//   isDiscount: false,

//   discount: 0,

//   isPopulor: false,

//   cart: false,

//   name: "Oreo And Chocolate CupCake",
//   image: [
//     "./cupcake/Oreo-And-Chocolate-CupCake1.jpg",
//     "./cupcake/Oreo-And-Chocolate-CupCake2.jpg",
//   ],
//   price: 499,
//   Description: {
//     Details: [
//       " 6 Pcs of Cupcakes",
//       "Cupcake Flavour- Oreo And Chocolate",
//       "Red Velvet Base with Cheese Cream Frosting",
//       "Decorated with Fruits",
//     ],
//     Instructions: [
//       "Upon receiving the cupcake, immediately refrigerate it",
//       "Leave it in the fridge until it is time to consume.",
//       "The cup cake should be placed back in the fridge and should be consumed within 24 hours",
//       "Enjoy your cupcake!",
//     ],
//   },
// });

//     const result = await newCart.save();
//     console.log({ result });
//     res.status(201).send(result);
//   } catch (err) {
//     res.status(404).send(err);
//   }
// })

router
  .route("/cupcakes")

  .get(async (req, res) => {
    try {
      const result = await Product.find({ category: "cupcake" });
      res.send(result);
      // console.log(result);
    } catch (err) {
      res.send(err);
    }
  });

router.route("/brownies").get(async (req, res) => {
  try {
    console.log("here");
    const result = await Product.find({ category: "brownie" });
    // console.log(result);

    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

router.route("/cookies").get(async (req, res) => {
  try {
    const result = await Product.find({ category: "cookie" });
    res.send(result);
    // console.log(result);
  } catch (err) {
    res.send(err);
  }
});

// router.route("/rams").get(async (req, res) => {
//   try {
//     // const result = await Product.find({ category: "cookie" });
//     res.send({ success: "true" });
//     console.log("true");
//   } catch (err) {
//     res.send(err);
//   }
// });

// router.route("/cakes/1").get(async (req, res) => {
//   try {
//     // const result = await Product.find({ category: "cookie" });
//     res.send({ result: "true" });
//     // console.log(result);
//   } catch (err) {
//     res.send(err);
//   }
// });

module.exports = router;
