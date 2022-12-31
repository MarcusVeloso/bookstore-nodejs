import { config } from "dotenv";

config();

export const dbPassword = process.env.DB_PASSWORD;
export const dbCollection = process.env.DB_COLLECTION;
