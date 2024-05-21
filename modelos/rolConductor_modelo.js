const db = require('../conexionbd');

const findAllRolConductors = async () => {
  const sql = `SELECT * FROM ROLCONDUCTOR`;
  const [rolConductors] = await db.promise().query(sql);
  return rolConductors;
};

const createRolConductor = async (rolConductorData) => {
  const { id, rol } = rolConductorData;
  const sql = `INSERT INTO ROLCONDUCTOR (ID, ROL) VALUES (?, ?)`;
  await db.promise().query(sql, [id, rol]);
};

const updateRolConductor = async (id, rolConductorData) => {
  const { rol } = rolConductorData;
  const sql = `UPDATE ROLCONDUCTOR SET ROL = ? WHERE ID = ?`;
  await db.promise().query(sql, [rol, id]);
};

const deleteRolConductor = async (id) => {
  const sql = `DELETE FROM ROLCONDUCTOR WHERE ID = ?`;
  await db.promise().query(sql, [id]);
};

module.exports = {
  findAllRolConductors,
  createRolConductor,
  updateRolConductor,
  deleteRolConductor
};
