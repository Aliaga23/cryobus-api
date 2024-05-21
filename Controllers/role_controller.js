const roleModel = require('../modelos/role_modelo');

const getAllRoles = async (req, res) => {
  try {
    const roles = await roleModel.findAllRoles();
    res.json(roles);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createRole = async (req, res) => {
  try {
    await roleModel.createRole(req.body);
    res.status(201).send('Role created');
   
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateRole = async (req, res) => {
  try {
    await roleModel.updateRole(req.params.id, req.body);
    res.send('Role updated');
   
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteRole = async (req, res) => {
  try {
    await roleModel.deleteRole(req.params.id);
    res.send('Role deleted');
   
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllRoles,
  createRole,
  updateRole,
  deleteRole
};
