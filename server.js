const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const usuarioRoutes = require('./Routes/userRouter');
const roleRoutes = require('./Routes/roleRouter');
const rolConductorRoutes = require('./Routes/rolConductorRouter');
const tipoEnvioRouter = require('./Routes/tipoEnvioRouter');
const permisoRolRouter = require('./Routes/permisoRolRouter');
const permisoRouter = require('./Routes/permisoRouter');
const usuarioRouter = require('./Routes/usuarioRouter'); // Añadir usuarioRouter

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3307,
    password: "",
    database: "cryobus2"
});

db.connect(err => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos establecida');
});

app.use('/api/users', usuarioRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/rolConductor', rolConductorRoutes);
app.use('/api/tipoEnvio', tipoEnvioRouter);
app.use('/api/permisoRol', permisoRolRouter);
app.use('/api/permisos', permisoRouter);
app.use('/api/usuario', usuarioRouter); // Asegúrate de tener esta línea


const express = require('express');
const path = require('path');


// Middleware para servir los archivos estáticos de la carpeta 'build'
app.use(express.static(path.join(__dirname, 'build')));

// Ruta que captura todas las peticiones HTTP GET no capturadas por las anteriores
// y devuelve el archivo index.html de la aplicación React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configuración del puerto
const PORT = process.env.PORT || 8081;  // Usa el puerto proporcionado por el entorno o 8081 si no se proporciona ninguno

// Pone el servidor a escuchar en el puerto configurado
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});




app.post('/register', async (req, res) => {
    const { id, pass, apellidos, nombres, id_rol } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(pass, 10);
        db.query("INSERT INTO USUARIO (ID, CONTRA, APELLIDOS, NOMBRES, IDROL) VALUES (?, ?, ?, ?, ?)", [id, hashedPassword, apellidos, nombres, id_rol], (err, result) => {
            if (err) {
                console.error('Error al registrar el usuario:', err);
                return res.status(500).json({ message: "Error al registrar el usuario", error: err });
            }
            res.status(201).json({ message: "Usuario registrado exitosamente" });
        });
    } catch (error) {
        console.error('Error al registrar el usuario:', error);
        res.status(500).json({ message: "Error al registrar el usuario", error });
    }
});

app.post('/login', (req, res) => {
    const { id, pass } = req.body;
    db.query("SELECT * FROM USUARIO WHERE ID = ?", [id], async (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Error en el servidor", error: err });
        }
        if (results.length === 0) {
            return res.status(401).json({ message: "Usuario o contraseña incorrectos" });
        }
        const user = results[0];
        const isPasswordValid = await bcrypt.compare(pass, user.CONTRA);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Usuario o contraseña incorrectos" });
        }
        const token = jwt.sign({ user: { id: user.ID } }, 'your_jwt_secret', { expiresIn: '1h' }); // Genera un token JWT
        
        // Obtener roles del usuario
        db.query(`
            SELECT R.NOMBRE AS ROL
            FROM USUARIO U
            JOIN ROL R ON U.IDROL = R.ID
            WHERE U.ID = ?
        `, [user.ID], (roleErr, roleResults) => {
            if (roleErr) {
                return res.status(500).json({ message: "Error al obtener roles del usuario", error: roleErr });
            }
            res.json({ token, user, roles: roleResults });
        });
    });
});
app.listen(8081, () => {
    console.log("Servidor escuchando en el puerto 8081");
});