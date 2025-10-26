const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/DB.js');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});

app.listen(PORT, () => {
    console.log(`servidor iniciado en el puerto:http://localhost:${PORT}`);
});