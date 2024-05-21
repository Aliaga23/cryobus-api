// server/conexionbd.js
const mysql = require('mysql2');

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

module.exports = db;
