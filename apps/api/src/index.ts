import mongoose from "mongoose";
import app from "./server";
import { config } from "dotenv";

config({
  path: "./../../.env",
});

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});

const db = process.env.DATABASE;
if (db) {
  mongoose.connect(db).then(() => {
    console.log("DB connected successfully yay");
  });
}
