import mongoose from "mongoose";
import { dbCollection, dbPassword } from "../../config.js";

mongoose.set("strictQuery", false);
mongoose.connect(
  `mongodb+srv://admin:${dbPassword}@clusterv89.ldnjgat.mongodb.net/${dbCollection}`
);

let db = mongoose.connection;

export default db;
