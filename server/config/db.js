const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);

    console.log("MONGODB CONNECTION SUCCESSFUL");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDb;
