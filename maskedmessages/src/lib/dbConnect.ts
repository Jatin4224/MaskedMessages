import { syncBuiltinESMExports } from "module";
import mongoose from "mongoose";

//typescript kyuki humko ptahe db se jo data aara h vo ky h to humko number format mehi aaygi
type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

//void means - we dont care what type of data incoming
async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("already connect to db");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);

    //connection se kuch data nikalna h
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log("db connection failed ", error);
    process.exit(1);
  }
}
export default dbConnect;
