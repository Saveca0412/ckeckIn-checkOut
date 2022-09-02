const express = require("express");

const {
  createRegisters,
  getAllRegisters,
  getRegisters,
  updateRegister,
  deleteRegister,
} = require("../controllers/registration.controller");

const registrationRouter = express.Router();

registrationRouter.get("/", getAllRegisters);

registrationRouter.get("/:id", getRegisters);

registrationRouter.post("/", createRegisters);

registrationRouter.patch("/:id", updateRegister);

registrationRouter.delete("/:id", deleteRegister);

module.exports = { registrationRouter };
