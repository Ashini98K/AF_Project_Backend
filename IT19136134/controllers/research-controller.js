const express = require("express");
const router = express.Router();
const service = require("../services/research-service");
const upload = require("../middleware/upload");

module.exports = function () {
  router.post(
    "/createresearch",
    upload.single("document"),
    service.createResearch
  );
  router.get("/getresearch", service.getResearch);
  return router;
};
