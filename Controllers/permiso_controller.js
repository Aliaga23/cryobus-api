const db = require('../conexionbd');

const getPermisos = async (req, res) => {
  try {
    const [permisos] = await db.promise().query('SELECT * FROM PERMISO');
    res.json(permisos);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getPermisos
};
