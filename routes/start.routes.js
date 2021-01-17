var express = require("express");
var router = express.Router();
var Started = require("../models/Started");

router.get("/", function (req, res, next) {
  res.json({ message: "respond with a resource" });
});

router.post("/", async function (req, res) {
  try {
    const { StartTime, CLI, DialNo, IVRID } = req.query;
    const startedCall = new Started({
      StartTime,
      CLI,
      DialNo,
      IVRID,
    });
    await startedCall.save();
    res.status(200).json({
      StartTime,
      CLI,
      DialNo,
      IVRID,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
