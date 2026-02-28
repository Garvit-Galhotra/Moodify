const mongoose = require("mongoose");

const blackListSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      require: [true, "Token is required for blacklist"],
    },
  },
  { timestamps: true },
);

const blackListModel = mongoose.model("blacklist", blackListSchema);

module.exports = blackListModel;
    