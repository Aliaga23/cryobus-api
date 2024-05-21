const tipoEnvioModel = require('../modelos/tipoEnvio_modelo');

const getAllTipoEnvios = async (req, res) => {
  try {
    const tipoEnvios = await tipoEnvioModel.findAllTipoEnvios();
    res.json(tipoEnvios);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createTipoEnvio = async (req, res) => {
  try {
    await tipoEnvioModel.createTipoEnvio(req.body);
    res.status(201).send('Tipo de Envío creado');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateTipoEnvio = async (req, res) => {
  try {
    await tipoEnvioModel.updateTipoEnvio(req.params.id, req.body);
    res.send('Tipo de Envío actualizado');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteTipoEnvio = async (req, res) => {
  try {
    await tipoEnvioModel.deleteTipoEnvio(req.params.id);
    res.send('Tipo de Envío eliminado');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllTipoEnvios,
  createTipoEnvio,
  updateTipoEnvio,
  deleteTipoEnvio
};
