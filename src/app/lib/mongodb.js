import mongoose from "mongoose";

const connectDB = async () => {
    // always encode password as shown below to avoid errors
    // const adminURI = encodeURIComponent(process.env.MONGODB_URI)
    console.log("AdminURI: ", process.env.MONGODB_URI);
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("db connected");
    }
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;
