const { Schema, model } = require("mongoose");

const EndedSchema = new Schema(
  {
    StartTime: {
      type: Number,
      required: true,
    },
    CLI: {
      type: String,
      required: true,
    },
    DialNo: {
      type: String,
      required: true,
    },
    IVRID: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Ended", EndedSchema);
