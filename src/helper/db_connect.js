import mongoose from "mongoose";

export const db_connect = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "FinApp",
    });
    console.log("DB connected:", connection.host);
  } catch (error) {
    console.error("Failed to connect to Database:", error.message);
  }
};
