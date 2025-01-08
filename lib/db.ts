// src/Lib/db.ts
import mongoose from "mongoose";

// MongoDB connection string
const MONGODB_URI = process.env.MONGODB_URI;



const DBconnect = async () => {
  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    console.log('MongoDB is already connected');
    return;
  }

  if (connectionState === 2) {
    console.log('MongoDB is connecting');
    return;
  }

  try {
     mongoose.connect(MONGODB_URI!, {
      dbName: 'NextJSAPI',
      bufferCommands: true,
    });
    
  } catch (error: any) {
    console.log('MongoDB connection error:', error);
    throw new Error('MongoDB connection error' , error);
  }
}

export default DBconnect;