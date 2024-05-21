const express = require('express');
const router = express.Router();
const usuarioController = require('../Controllers/usuario_controller');

router.get('/info', usuarioController.getUserInfo);
router.get('/roles', usuarioController.getUserRoles);

module.exports = router;
