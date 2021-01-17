var express = require("express");
var router = express.Router();
var Ended = require("../models/Ended");

router.get("/", async function (req, res) {
  try {
    const endedCalls = await Ended.find();
    res.json(endedCalls);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async function (req, res) {
  try {
    const { StartTime, CLI, DialNo, IVRID } = req.query;
    const endedCall = new Ended({
      StartTime,
      CLI,
      DialNo,
      IVRID,
    });
    await endedCall.save();
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
