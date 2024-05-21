// server/Routes/userRouter.js
const express = require('express');
const router = express.Router();
const userController = require('../Controllers/user_controller');

// Rutas de usuarios
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
