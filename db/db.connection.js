const mongoose = require("mongoose");

async function initializeDbConnection() {
  try {
    const response = await mongoose.connect(
      "mongodb+srv://vineet:cookiesbakery@cluster0.ymbhv.mongodb.net/shopstack?retryWrites=true&w=majority",

      {
        useFindAndModify: false,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );
  } catch (error) {
    console.error("mongoose connection failed...", error);
  }
}

module.exports = { initializeDbConnection };
