import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI as string;

if (!MONGO_URI) {
  throw new Error('Please define the MONGO_URI environment variable in .env');
}

let cached: { conn: mongoose.Connection | null; promise: Promise<mongoose.Connection> | null } =
  global.mongoose || { conn: null, promise: null };

async function dbConnect(): Promise<mongoose.Connection> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const options = { bufferCommands: false };
    cached.promise = mongoose.connect(MONGO_URI, options).then((mongoose) => mongoose.connection);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
