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


  try {
    mongoose.connect(MONGO_URI!,{
      dbName: 'NextJSAPI',
      bufferCommands: true,
    });
  } catch (error:any) {
    console.log('MONGODB connection error:' , error);
    throw new Error('MongoDB connection error' , error);

  }




}

export default DBconnect;