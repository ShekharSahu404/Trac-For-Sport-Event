const mongoose = require("mongoose");

// Replace this with your MONGOURI.
const MONGOURI =
  "mongodb+srv://shekharsahu1020:TQqo5DqD271w4Wro@talk.ltnqddt.mongodb.net/?retryWrites=true&w=majority&appName=talk";

const InitiateMongoServer = async () => {
  try {
    await mongoose
      .connect(MONGOURI, {
        useNewUrlParser: true,
      })
      .then(() => {
        console.log("Connected to database");
      });
    // .catch(e=>console.log(e))
  } catch (e) {
    console.log("MongoDB Error");
  }
};

module.exports = InitiateMongoServer;