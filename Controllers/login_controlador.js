const bcrypt = require('bcrypt');
const loginModelo = require('../modelos/login_modelo');

const login = (req, res) => {
    const { id, pass } = req.body;

    loginModelo.obtenerUsuarioPorId(id, async (err, user) => {
        if (err) {
            return res.status(500).json({ message: "Error en el servidor", error: err });
        }
        if (!user) {
            return res.status(401).json({ message: "Usuario o contraseña incorrectos" });
        }

        const isPasswordValid = await bcrypt.compare(pass, user.CONTRA);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Usuario o contraseña incorrectos" });
        }

       
    });

};

const register = (req, res) => {
    const { id, pass, apellidos, nombres, id_rol } = req.body;

    loginModelo.registrarUsuario(id, pass, apellidos, nombres, id_rol, (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Error al registrar el usuario", error: err });
        }
        res.status(201).json({ message: "Usuario registrado exitosamente" });
    });
};

module.exports = {
    login,
    register
};
