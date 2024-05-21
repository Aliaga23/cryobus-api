const db = require('../conexionbd');

const findPermisosByRolId = async (idRol) => {
  const sql = 'SELECT * FROM DETALLEROLPERMISO WHERE IDROL = ?';
  const [permisos] = await db.promise().query(sql, [idRol]);
  return permisos;
};

const assignPermisoToRol = async (idRol, permisoData) => {
  const { nro, idPermiso } = permisoData;
  const sql = 'INSERT INTO DETALLEROLPERMISO (IDROL, NRO, IDPERMISO) VALUES (?, ?, ?)';
  await db.promise().query(sql, [idRol, nro, idPermiso]);
};

const removePermisoFromRol = async (idRol, nro) => {
  const sql = 'DELETE FROM DETALLEROLPERMISO WHERE IDROL = ? AND NRO = ?';
  await db.promise().query(sql, [idRol, nro]);
};

module.exports = {
  findPermisosByRolId,
  assignPermisoToRol,
  removePermisoFromRol
};
