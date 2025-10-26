const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Denigvm10',
    database: process.env.DB_NAME || 'comments_db',
});

db.connect((err) => {
    if (err) {
        console.error('no se pudo conectar a la base de datos ❌​:', err);
        return;
    }
    console.log('Conectado a la base de datos✔️​​');
});

module.exports = db;