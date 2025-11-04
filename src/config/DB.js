import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const db =  mysql.createPool({
    host: process.env.DB_HOST || 'switchyard.proxy.rlwy.net',
    user: process.env.DB_USER || 'root',
    port: process.env.DB_PORT || 54676,
    password: process.env.DB_PASSWORD || 'lFeemOKCjQfNGSdBLKIIHTiMZOSXsvfu',
    database: process.env.DB_NAME || 'railway',

});
console.log('Conectado a la base de datos✔️​​');
export default db;