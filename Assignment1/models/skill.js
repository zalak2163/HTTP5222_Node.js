const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  name: String,
  level: String, // e.g., Beginner, Intermediate, Expert
});

module.exports = mongoose.model("Skill", skillSchema);
