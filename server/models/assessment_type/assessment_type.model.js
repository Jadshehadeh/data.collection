const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assessment_typeSchema = new Schema({
  assessment_type_description: String,
});

module.exports = mongoose.model("assessment_type", assessment_typeSchema);
