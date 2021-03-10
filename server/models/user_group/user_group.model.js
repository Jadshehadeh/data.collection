const mongoose = require("mongoose");
const mongoose = require("mongoose");
Schema = mongoose.Schema;

const mongoose = require("mongoose");
user_groupSchema = new Schema({
  group_name: String,
});

module.exports = mongoose.model("user_group", user_groupSchema);
