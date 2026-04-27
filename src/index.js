import dotenv from "dotenv";

import connectDB from "./db/index.js";

import dns from "dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config({
  path: "./env",
});

connectDB();

/*
import express from "express";
let app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR : ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server is started on PORT ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR : ", error);
    throw error;
  }
})();
*/
