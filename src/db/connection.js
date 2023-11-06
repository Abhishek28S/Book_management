const mongoose = require("mongoose");
const connectDb = () => {
  mongoose.connect(process.env.DB_URL)
    .then(() => console.log("DB connected Successfully"))
    .catch((error) => {
      console.error("error "+error.message);
    });
}

module.exports = connectDb
