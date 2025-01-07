import mongoose from "mongoose";

const MONGO_URI = process.env.MONGODB_URI


const DBconnect =async () => {
  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {

    console.log('MongoDB is already connected');
    return;
  }


  if (connectionState === 2) {
    console.log('Mongodb connection is connecting ');
    return;
  }







}