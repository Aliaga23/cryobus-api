const express = require('express');
const router = express.Router();
const permisoRolController = require('../Controllers/permisoRol_controller');

router.get('/:idRol', permisoRolController.getPermisosByRolId);
router.post('/:idRol', permisoRolController.assignPermiso);
router.delete('/:idRol/:nro', permisoRolController.removePermiso);

module.exports = router;
