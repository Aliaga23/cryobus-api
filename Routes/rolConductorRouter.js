const express = require('express');
const router = express.Router();
const rolConductorController = require('../Controllers/rolConductor_controller');

router.get('/', rolConductorController.getAllRolConductors);
router.post('/', rolConductorController.createRolConductor);
router.put('/:id', rolConductorController.updateRolConductor);
router.delete('/:id', rolConductorController.deleteRolConductor);

module.exports = router;
