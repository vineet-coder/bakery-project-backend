const GetData = async (collection, userId, res) => {
  try {
    const result = await collection.find({ userId }).populate("Product");

    res.status(200).json({ success: true, message: "your data", result });
  } catch (error) {
    res.status(404).json({ success: false, message: "request failed " });
  }
};

const PostProduct = async (userId, productId, collection, res) => {
  try {
    const user = await collection.find({ userId });
    if (user.length === 0) {
      const newUser = new collection({
        userId: userId,
        cartPoducts: [productId],
      });

      await newUser.save();

      const result = await collection.find({ userId }).populate("Product");
      console.log("post bhi chalta hai!!");

      return res
        .status(200)
        .json({ success: true, message: `data post`, result });
    } else {
      const productStatus = user[0].products.includes(productId);

      if (!productStatus) {
        await collection.findByIdAndUpdate(user[0]._id, {
          $push: { cartPoducts: productId },
        });
      }
    }

    const result = await collection.find({ userId }).populate("Product");

    res
      .status(200)
      .json({ success: true, message: `${collection} post`, result });
  } catch (error) {
    res.status(404).json({ success: false, message: "request failed " });
  }
};

const DeleteProduct = async (userId, productId, collection, res) => {
  try {
    await collection.findByIdAndUpdate(userId, {
      $pull: { cartPoducts: productId },
    });

    const result = await collection.find({ userId }).populate("Product");

    res.status(200).json({ success: true, message: "your data", result });
  } catch (error) {
    res.status(404).json({ success: false, message: "request failed " });
  }
};

module.exports = { DeleteProduct, GetData, PostProduct };
