const express = require("express");
const router = express.Router();
const service = require("../services/user-service");

module.exports = function () {
  router.post("/create", service.createUser);
  return router;
};
