import mongoose from "mongoose";
const db = require("./models/User.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/covidcompaniondb");

const userSeed = 
  {   //userId: 
  name: "cris",
  location: "stamford"
  //covidStatus: 
//   inQuarantine: 
//   quarantineDay: 
//   tested: 
//   testDate: 
//   vaccinated: 
//   vaccineCo: 
//   riskLevel: 
    
  },