import mongoose from "mongoose";

const connection: { isConnected: number | undefined } = {
  isConnected: undefined,
};

// async function dbConnect() {
//   if (connection.isConnected) {
//     console.log("Database connected!");
//     return;
//   }

//   const db = await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI!);

//   connection.isConnected = db.connections[0].readyState;
// }

// export default dbConnect;

async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    console.log("Already connected");
    return;
  }

  return mongoose
    .connect(process.env.NEXT_PUBLIC_MONGO_URI!)
    .then(() => {
      console.log("Connected to the database");
    })
    .catch((error) => {
      console.error("Error connecting to the database:", error);
    });
}

export default dbConnect;
