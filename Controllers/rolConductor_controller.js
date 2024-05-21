const rolConductorModel = require('../modelos/rolConductor_modelo');

const getAllRolConductors = async (req, res) => {
  try {
    const rolConductors = await rolConductorModel.findAllRolConductors();
    res.json(rolConductors);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createRolConductor = async (req, res) => {
  try {
    await rolConductorModel.createRolConductor(req.body);
    res.status(201).send('Rol de Conductor creado');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateRolConductor = async (req, res) => {
  try {
    await rolConductorModel.updateRolConductor(req.params.id, req.body);
    res.send('Rol de Conductor actualizado');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteRolConductor = async (req, res) => {
  try {
    await rolConductorModel.deleteRolConductor(req.params.id);
    res.send('Rol de Conductor eliminado');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllRolConductors,
  createRolConductor,
  updateRolConductor,
  deleteRolConductor
};
