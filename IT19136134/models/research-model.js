const mongoose = require("mongoose");

const ResearchPaperModel = new mongoose.Schema({
  userId: { type: String, required: true, trim: true },
  tittle: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  document: { type: String, required: true },
  status: { type: String, required: true },
  paymentStatus: { type: String, required: true },
});

module.exports = mongoose.model("researchpapers", ResearchPaperModel);
