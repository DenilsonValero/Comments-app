const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config();

const db =  mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Denigvm10',
    database: process.env.DB_NAME || 'comments_db',
});
console.log('Conectado a la base de datos✔️​​');

/* db.connect().then(() => {
    console.log('Conectado a la base de datos✔️​​');
})
.catch((err) => {
    console.error('no se pudo conectar a la base de datos ❌​:', err);
}); */

/* db.connect((err) => {
    if (err) {
        console.error('no se pudo conectar a la base de datos ❌​:', err);
        return;
    }
    console.log('Conectado a la base de datos✔️​​');
}); */

module.exports = db;