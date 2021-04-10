import mongoose from "mongoose";

// This will outline the structure of the questionnaire (schema)

const quesSchema = mongoose.Schema({
  covidStatus: { type: String, required: true },
  inQuarantine: { type: Boolean, required: true },
  quarantineDay: { type: Number, required: true },
  tested: { type: Boolean, required: true },
  testDate: { type: Boolean, required: true },
  vaccinated: { type: Boolean, required: true },
  vaccineCo: { type: String, required: true },
  riskLevel: { type: String, required: true },
});

module.exports = mongoose.model("questions", quesSchema);
