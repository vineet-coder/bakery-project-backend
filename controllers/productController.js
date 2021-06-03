const GetData = async (collection, userId, res) => {
  try {
    const result = await collection.find({ userId }).populate({
      path: "products.productid",
      model: "Product",
    });

    res.status(200).json({ success: true, message: "your data", result });
  } catch (error) {
    res.status(404).json({ success: false, message: "request failed " });
  }
};

const PostProduct = async (userId, productId, quantity, collection, res) => {
  try {
    console.log("aa gaya hu me");
    const user = await collection.find({ userId });
    console.log({ user });
    console.log(productId);

    if (user.length === 0) {
      console.log("new user");

      const newUser = new collection({
        userId: userId,
        products: [{ productid: productId, quantity: quantity }],
      });

      await newUser.save();

      const result = await collection.find({ userId }).populate({
        path: "products.productid",
        model: "Product",
      });

      console.log({ result });
      console.log("post bhi chalta hai!!");

      return res
        .status(200)
        .json({ success: true, message: `data post`, result });
    } else {
      console.log("user to hai");
      const productStatus = user[0].products
        .map((item) => item.productid)
        .includes(productId);
      console.log(user[0].products.map((item) => item.productid));

      console.log({ productStatus });

      if (!productStatus) {
        console.log("new product");

        await collection.findByIdAndUpdate(user[0]._id, {
          $push: { products: { productid: productId, quantity: quantity } },
        });
      }
    }
    console.log("sab kr dia");

    const result = await collection.find({ userId }).populate({
      path: "products.productid",
      model: "Product",
    });
    console.log(result);

    res
      .status(200)
      .json({ success: true, message: `${collection} post`, result });
  } catch (error) {
    res.status(404).json({ success: false, message: "request failed " });
  }
};

const DeleteProduct = async (userId, productId, collection, res) => {
  try {
    console.log("aa gaya hu me");
    const user = await collection.find({ userId });

    // await collection.findByIdAndUpdate(user[0]._id, {
    //   $pull: { products: { productId: productId, quantity: quantity } },
    // });

    await collection.updateOne(
      { _id: user[0]._id },
      { $pull: { products: { productid: productId } } },
      { safe: true, multi: true }
    );
    console.log("kam tamam kr dia aka");

    const result = await collection.find({ userId }).populate({
      path: "products.productid",
      model: "Product",
    });
    console.log(result);

    res.status(200).json({ success: true, message: "your data", result });
  } catch (error) {
    res.status(404).json({ success: false, message: "request failed " });
  }
};

module.exports = { DeleteProduct, GetData, PostProduct };
