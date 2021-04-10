import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import { User } from "./models/userModel.js";

// App Config
const app = express();
const port = process.env.PORT || 3000;
const connection_url = process.env.MONGODB_STRING;
​
// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
​
// Connection to MongoDB
mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb://localhost/covidcompaniondb" ||
      connection_url,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("   *** Connected to Database ***"))
  .catch((err) => console.log(err));
​
// API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello World!"));
​
// Need a post req to pass in data to the db //
​
// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));