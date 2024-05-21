const db = require('../conexionbd');

const getUserInfo = async (req, res) => {
  const userId = req.headers.authorization.split(' ')[1]; // Obtener el ID del usuario desde el token
  try {
    const [user] = await db.promise().query("SELECT ID, APELLIDOS, NOMBRES, IDROL FROM USUARIO WHERE ID = ?", [userId]);
    res.json(user[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getUserRoles = async (req, res) => {
  const userId = req.headers.authorization.split(' ')[1];
  try {
    const [roles] = await db.promise().query(`
      SELECT R.NOMBRE AS ROL
      FROM USUARIO U
      JOIN ROL R ON U.IDROL = R.ID
      WHERE U.ID = ?
    `, [userId]);
    res.json(roles);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getUserInfo,
  getUserRoles,
};
