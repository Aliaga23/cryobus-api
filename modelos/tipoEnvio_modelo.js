const db = require('../conexionbd');

const findAllTipoEnvios = async () => {
  const sql = 'SELECT * FROM TIPOENVIO';
  const [tipoEnvios] = await db.promise().query(sql);
  return tipoEnvios;
};

const createTipoEnvio = async (tipoEnvioData) => {
  const { id, nombre } = tipoEnvioData;
  const sql = 'INSERT INTO TIPOENVIO (ID, NOMBRE) VALUES (?, ?)';
  await db.promise().query(sql, [id, nombre]);
};

const updateTipoEnvio = async (id, tipoEnvioData) => {
  const { nombre } = tipoEnvioData;
  const sql = 'UPDATE TIPOENVIO SET NOMBRE = ? WHERE ID = ?';
  await db.promise().query(sql, [nombre, id]);
};

const deleteTipoEnvio = async (id) => {
  const sql = 'DELETE FROM TIPOENVIO WHERE ID = ?';
  await db.promise().query(sql, [id]);
};

module.exports = {
  findAllTipoEnvios,
  createTipoEnvio,
  updateTipoEnvio,
  deleteTipoEnvio
};
