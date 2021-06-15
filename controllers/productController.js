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
    const user = await collection.find({ userId });

    if (user.length === 0) {
      const newUser = new collection({
        userId: userId,
        products: [{ productid: productId, quantity: quantity }],
      });

      await newUser.save();

      const result = await collection.find({ userId }).populate({
        path: "products.productid",
        model: "Product",
      });

      return res
        .status(200)
        .json({ success: true, message: `data post`, result });
    } else {
      const productStatus = user[0].products
        .map((item) => item.productid)
        .includes(productId);

      if (!productStatus) {
        await collection.findByIdAndUpdate(user[0]._id, {
          $push: { products: { productid: productId, quantity: quantity } },
        });
      }
    }

    const result = await collection.find({ userId }).populate({
      path: "products.productid",
      model: "Product",
    });
   

    res
      .status(200)
      .json({ success: true, message: `${collection} post`, result });
  } catch (error) {
    res.status(404).json({ success: false, message: "request failed " });
  }
};

const DeleteProduct = async (userId, productId, collection, res) => {
  try {
    const user = await collection.find({ userId });

    await collection.updateOne(
      { _id: user[0]._id },
      { $pull: { products: { productid: productId } } },
      { safe: true, multi: true }
    );

    const result = await collection.find({ userId }).populate({
      path: "products.productid",
      model: "Product",
    });

    res.status(200).json({ success: true, message: "your data", result });
  } catch (error) {
    res.status(404).json({ success: false, message: "request failed " });
  }
};

module.exports = { DeleteProduct, GetData, PostProduct };
