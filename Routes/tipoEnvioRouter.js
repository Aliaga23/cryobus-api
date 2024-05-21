const express = require('express');
const router = express.Router();
const tipoEnvioController = require('../Controllers/tipoEnvio_controller');

router.get('/', tipoEnvioController.getAllTipoEnvios);
router.post('/', tipoEnvioController.createTipoEnvio);
router.put('/:id', tipoEnvioController.updateTipoEnvio);
router.delete('/:id', tipoEnvioController.deleteTipoEnvio);

module.exports = router;
