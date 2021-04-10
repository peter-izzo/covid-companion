import mongoose from "mongoose";

// This will outline the structure of the questionnaire (schema)

const quesModel = mongoose.Schema({
  covidStatus: String,
  inQuarantine: Boolean,
  quarantineDay: Number,
  tested: Boolean,
  vaccinated: Boolean,
  vaccineCo: String,
  riskLevel: String,
});

export default mongoose.model("questions", quesModel);
