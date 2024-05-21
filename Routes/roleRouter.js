// server/Routes/roleRouter.js
const express = require('express');
const router = express.Router();
const roleController = require('../Controllers/role_controller');

// Rutas de roles
router.get('/', roleController.getAllRoles);
router.post('/', roleController.createRole);
router.put('/:id', roleController.updateRole);
router.delete('/:id', roleController.deleteRole);

module.exports = router;
