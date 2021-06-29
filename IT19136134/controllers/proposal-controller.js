const express = require("express");
const router = express.Router();
const service = require("../services/proposal-service");
const upload = require("../middleware/upload");

module.exports = function () {
  router.post(
    "/createproposal",
    upload.single("document"),
    service.createProposal
  );
  router.get("/getproposal", service.getProposal);
  return router;
};
