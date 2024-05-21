const db = require('../conexionbd');

const getPermisosByRolId = async (req, res) => {
  try {
    const { idRol } = req.params;
    const [permisos] = await db.promise().query('SELECT * FROM DETALLEROLPERMISO WHERE IDROL = ?', [idRol]);
    res.json(permisos);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const assignPermiso = async (req, res) => {
  try {
    const { idRol } = req.params;
    const { nro, idPermiso } = req.body;
    await db.promise().query('INSERT INTO DETALLEROLPERMISO (IDROL, NRO, IDPERMISO) VALUES (?, ?, ?)', [idRol, nro, idPermiso]);
    res.status(201).send('Permiso asignado');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const removePermiso = async (req, res) => {
  try {
    const { idRol, nro } = req.params;
    await db.promise().query('DELETE FROM DETALLEROLPERMISO WHERE IDROL = ? AND NRO = ?', [idRol, nro]);
    res.send('Permiso eliminado');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getPermisosByRolId,
  assignPermiso,
  removePermiso
};
