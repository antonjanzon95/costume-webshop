import mongoose from "mongoose";

const connection: { isConnected: number | undefined } = {
  isConnected: undefined,
};

async function dbConnect() {
  if (connection.isConnected) {
    console.log("Database connected!");
    return;
  }

  const db = await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI!);

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
