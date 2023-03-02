import mongoose from "mongoose";

const uri = process.env.MONGO_URI;

const connectMongo = async () => mongoose.connect(uri);

export default connectMongo;
