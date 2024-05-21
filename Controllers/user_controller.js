const userModel = require('../modelos/user_modelo');
const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.findAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await userModel.findUserById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    await userModel.createUser(req.body);
    res.status(201).json({ message: "Usuario registrado exitosamente" });
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    if (!res.headersSent) {
      res.status(500).json({ message: "Error al registrar el usuario", error });
    }
  }
};

const updateUser = async (req, res) => {
  try {
    await userModel.updateUser(req.params.id, req.body);
    res.send('User updated');
  } catch (error) {
    if (!res.headersSent) {
      res.status(500).send(error.message);
    }
  }
};

const deleteUser = async (req, res) => {
  try {
    await userModel.deleteUser(req.params.id);
    res.send('User deleted');
  } catch (error) {
    if (!res.headersSent) {
      res.status(500).send(error.message);
    }
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
