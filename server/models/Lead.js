const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  text: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const leadSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    company: String,
    source: {
      type: String,
      enum: ["Website", "LinkedIn", "Referral", "Instagram", "Other"],
      default: "Website"
    },
    status: {
      type: String,
      enum: ["New", "Contacted", "Follow-up", "Converted", "Lost"],
      default: "New"
    },
    notes: [noteSchema]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lead", leadSchema);