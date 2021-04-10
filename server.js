import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
<<<<<<< HEAD
//import quesSchema from "./models/quesSchema";
=======
import quesSchema from "./models/quesSchema";
>>>>>>> main
​
// App Config
const app = express();
<<<<<<< HEAD
=======

// DB config //@audit mongo link and connection_url
const connection_url =
  "mongodb+srv://admin:13umYzqHo5zsxCJF@cluster0.vzmrq.mongodb.net/covidcompaniondb?retryWrites=true&w=majority";
​
>>>>>>> main
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