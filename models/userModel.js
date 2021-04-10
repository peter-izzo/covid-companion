import mongoose from "mongoose";

// This will outline the structure of the user and their answers to questions (schema)

const userSchema = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  location: { type: String, required: true },
  covidStatus: { type: String, required: true },
  inQuarantine: { type: Boolean, required: true },
  quarantineDay: { type: Number, required: true },
  tested: { type: Boolean, required: true },
  testDate: { type: Boolean, required: true },
  vaccinated: { type: Boolean, required: true },
  vaccineCo: { type: String, required: true },
  riskLevel: { type: String, required: true },
  friends: [{ type: ObjectId, ref: "User" }],
});

exports.User = mongoose.model("User", userSchema);
