const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config();

const db =  mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Denigvm10',
    database: process.env.DB_NAME || 'comments-app',
});
console.log('Conectado a la base de datos✔️​​');

module.exports = db;