const db = require('../conexionbd');
const bcrypt = require('bcrypt');

// Define the salt rounds for bcrypt
const saltRounds = 10;

const findAllUsers = async () => {
  const sql = `SELECT * FROM USUARIO`;
  const [users] = await db.promise().query(sql);
  return users;
};

const findUserById = async (id) => {
  const sql = `SELECT * FROM USUARIO WHERE ID = ?`;
  const [user] = await db.promise().query(sql, [id]);
  return user[0];
};

const createUser = async (userData) => {
  const { id, apellidos, nombres, contra, idRol } = userData;
  const hashedPassword = await bcrypt.hash(contra, saltRounds); // Encrypt the password
  const sql = `INSERT INTO USUARIO (ID, APELLIDOS, NOMBRES, CONTRA, IDROL) VALUES (?, ?, ?, ?, ?)`;
  await db.promise().query(sql, [id, apellidos, nombres, hashedPassword, idRol]);
};

const updateUser = async (id, userData) => {
  const { apellidos, nombres, contra, idRol } = userData;
  const hashedPassword = await bcrypt.hash(contra, saltRounds); // Encrypt the password
  const sql = `UPDATE USUARIO SET APELLIDOS = ?, NOMBRES = ?, CONTRA = ?, IDROL = ? WHERE ID = ?`;
  await db.promise().query(sql, [apellidos, nombres, hashedPassword, idRol, id]);
};

const deleteUser = async (id) => {
  const sql = `DELETE FROM USUARIO WHERE ID = ?`;
  await db.promise().query(sql, [id]);
};

module.exports = {
  findAllUsers,
  findUserById,
  createUser,
  updateUser,
  deleteUser
};
