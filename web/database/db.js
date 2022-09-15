import mongoose from "mongoose";

const connectDB = async (userName, password) => {
  const URL = `mongodb+srv://${userName}:${password}@cluster0.nxyxghn.mongodb.net/shopifyDemo`;
  try {
    mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log("Connected Successfully..");
  } catch (error) {
    console.log("error while connecting database", error);
  }
};

export default connectDB;
