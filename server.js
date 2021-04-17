import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import User from "./models/User.js";
import cors from "cors";

//import postRoutes from "./routes/posts.js";

//App Config
const app = express();
const port = process.env.PORT || 3001;
const connection_url = process.env.MONGODB_STRING;

// Middlewares
//app.use("/posts", postRoutes);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//Connection to MongoDB
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
  .catch((err) => console.log(err))

app.get("/", (req, res) => {
  User.find((err, users) => {
    if (err) {
      console.log(err);
    } else {
      res.json(users);
    }
  });
});

app.post("/create", (req, res) => {
  console.log(req.body); //req.body.answers?
  const user = new User(req.body); //req.body.answers?
  user
    .save()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  User.findById(id, (err, user) => {
    res.json(user);
  });
});

app.post("/:id", (req, res) => {
  const id = req.params.id;
  User.findById(id, (err, user) => {
    if (!user) {
      res.status(404).send("User not found");
    } else {
      user.text = req.body.text;

      user
        .save()
        .then((user) => {
          res.json(user);
        })
        .catch((err) => res.status(500).send(err.message));
    }
  });
});

//Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
