const mongoose = require("mongoose");

// TODO: move to .env/sec
// TODO: use async await instead of then/catch
async function initializeDbConnection() {
  // console.log("hereee");
  // mongoose
  //   .connect(
  //     // "mongodb+srv://vineet:cookiesbakery@cluster0.ymbhv.mongodb.net/shopstack?retryWrites=true&w=majority",
  //     "mongodb://localhost:27017/shopstack?readPreference=primary",
  //     {
  //       useUnifiedTopology: true,
  //       useNewUrlParser: true,
  //     }
  //   )
  //   .then(() => console.log("successfully connected"))
  //   .catch((error) => console.error("mongoose connection failed...", error));

  try {
    const response = await mongoose.connect(
      "mongodb+srv://vineet:cookiesbakery@cluster0.ymbhv.mongodb.net/shopstack?retryWrites=true&w=majority",
      // "mongodb://localhost:27017/shopstack?readPreference=primary",
      {
        useFindAndModify: false,
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );

    console.log("connecting");
  } catch (error) {
    console.error("mongoose connection failed...", error);
  }
}

module.exports = { initializeDbConnection };
