import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";

// App Config
const app = express();
const port = process.env.PORT || 3000;
const connection_url = process.env.MONGODB_STRING;

// Middlewares

// DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello World!"));

// Need a post req to pass in data to the db //

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
