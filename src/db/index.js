import mongoose, { MongooseError } from "mongoose";
import { DB_NAME } from "../constants.js";

async function connectDB() {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );

    console.log(
      `\n MongoDB connected !! DB Host : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("mongooDB connection error", error);
    process.exit(1);
  }
}
export default connectDB;
