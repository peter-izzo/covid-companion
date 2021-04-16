import mongoose from "mongoose";
const { Schema } = mongoose;

// This will outline the structure of the user and their answers to questions (schema)

const userSchema = new Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  location: { type: String, required: true },
  covidStatus: { type: String, required: true },
  inQuarantine: { type: String },
  quarantineDay: { type: Number },
  tested: { type: String },
  testDate: { type: Date },
  vaccinated: { type: String },
  vaccineCo: { type: String },
  riskLevel: { type: String },
  sellYourSoul: { type: Boolean },
  friends: [{ type: Object, ref: "User" }],
});

// exports.User = mongoose.model("User", userSchema);

const User = mongoose.model("User", userSchema);

export default User;
