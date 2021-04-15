import mongoose from "mongoose";
import axios from "axios";
// const db = require("./models/User.js");

mongoose.connect("mongodb://localhost:27017/covidcompaniondb");

const userSeed = {
  //userId:
  name: "cris",
  location: "stamford",
  //covidStatus:
  //   inQuarantine:
  //   quarantineDay:
  //   tested:
  //   testDate:
  //   vaccinated:
  //   vaccineCo:
  //   riskLevel:
};

const init = async () => {
  try {
    axios.post("/create", userSeed);
  } catch (err) {
    console.log(err);
  }
};

init();
