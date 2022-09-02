const { Registration } = require("../models/registration.model");

const getAllRegisters = async (req, res) => {
  try {
    const registers = await Registration.findAll();

    res.status(200).json({
      status: "succes",
      data: {
        registers,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getRegisters = async (req, res) => {
  try {
    const { id } = req.params;
    const registers = await Registration.findOne({
      where: { id },
    });
    if (!registers) {
      return res.status(404).json({
        status: "error",
        message: "this register not found",
      });
    }
    res.status(200).json({
      status: "succes",
      data: { registers },
    });
  } catch (error) {
    console.log(error);
  }
};

const createRegisters = async (req, res) => {
  try {
    const { entranceTime } = req.body;

    const newRegister = await Registration.create({ entranceTime });

    res.status(201).json({
      status: "succes",
      data: { newRegister },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateRegister = async (req, res) => {
  try {
    const { exitTime } = req.body;
    const { id } = req.params;

    const register = await Registration.findOne({ where: { id } });

    if (!register) {
      return res.status(404).json({
        status: "error",
        message: "register not found",
      });
    }
    await register.update({ exitTime, status: "notWorking" });

    res.status(200).json({
      status: "succes",
      data: { register },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteRegister = async (req, res) => {
  try {
    const { id } = req.params;

    const register = await Registration.findOne({ where: { id } });

    if (!register) {
      return res.status(404).json({
        status: "error",
        message: "register not found",
      });
    }
    await register.update({ status: "deleted" });

    res.status(204).json({ status: "succes" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllRegisters,
  createRegisters,
  getRegisters,
  updateRegister,
  deleteRegister,
};
