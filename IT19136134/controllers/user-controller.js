const express = require("express");
const router = express.Router();
const service = require("../services/user-service");

module.exports = function () {
  router.post("/create", service.createUser);
  router.put("/update/:id", service.updateUser);
  return router;
};
