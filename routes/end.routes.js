var express = require("express");
var router = express.Router();
var Ended = require("../models/Ended");

router.get("/", function (req, res, next) {
  res.json({ message: "respond with a resource" });
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
