const bcrypt = require('bcrypt');
const db = require('../conexionbd');

const obtenerUsuarioPorId = (id, callback) => {
    const sql = "SELECT * FROM USUARIO WHERE ID = ?";
    db.query(sql, [id], (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results[0]);
    });
};

const registrarUsuario = async (id, pass, apellidos, nombres, id_rol, callback) => {
    try {
        const hashedPassword = await bcrypt.hash(pass, 10);
        const sql = "INSERT INTO USUARIO (ID, CONTRA, APELLIDOS, NOMBRES, IDROL) VALUES (?, ?, ?, ?, ?)";
        db.query(sql, [id, hashedPassword, apellidos, nombres, id_rol], (err, result) => {
            if (err) {
                return callback(err);
            }
            callback(null, result);
        });
    } catch (error) {
        callback(error);
    }
};

module.exports = {
    obtenerUsuarioPorId,
    registrarUsuario
};
