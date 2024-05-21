const express = require('express');
const router = express.Router();
const permisoController = require('../Controllers/permiso_controller');

router.get('/', permisoController.getPermisos);

module.exports = router;
