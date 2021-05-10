const mongoose = require("mongoose");


async function initializeDbConnection() {
  try {
    const response = await mongoose.connect(
      process.env.REACT_APP_CONNECTION_STRING,


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
