var express = require("express");
var router = express.Router();
var Started = require("../models/Started");

router.get("/", async function (req, res, next) {
  try {
    const startedCalls = await Started.find();
    res.json(startedCalls);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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
