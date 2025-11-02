import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const db =  mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Denigvm10',
    database: process.env.DB_NAME || 'comments_db',

});
console.log('Conectado a la base de datos✔️​​');
export default db;