const db = require('../conexionbd');

const findAllRoles = async () => {
  const sql = `SELECT * FROM ROL`;
  const [roles] = await db.promise().query(sql);
  return roles;
};

const createRole = async (roleData) => {
  const { id, nombre } = roleData;
  const sql = `INSERT INTO ROL (ID, NOMBRE) VALUES (?, ?)`;
  await db.promise().query(sql, [id, nombre]);
};

const updateRole = async (id, roleData) => {
  const { nombre } = roleData;
  const sql = `UPDATE ROL SET NOMBRE = ? WHERE ID = ?`;
  await db.promise().query(sql, [nombre, id]);
};

const deleteRole = async (id) => {
  const sql = `DELETE FROM ROL WHERE ID = ?`;
  await db.promise().query(sql, [id]);
};

module.exports = {
  findAllRoles,
  createRole,
  updateRole,
  deleteRole
};
