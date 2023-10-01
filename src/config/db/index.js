const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose
      .connect("mongodb://localhost:27017/roselia_dev")
      .then(() => console.log("Mongo Connected!"));
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connect };
