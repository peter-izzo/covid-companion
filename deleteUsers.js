import User from "./models/User.js";
import mongoose from "mongoose";

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

  User.deleteMany({}).then(() => User.find({})).catch(err => console.log(err));