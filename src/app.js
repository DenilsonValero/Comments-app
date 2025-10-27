const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const commentsRouter = require('./routers/comments.js');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use('/comments', commentsRouter);

app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});

app.listen(PORT, () => {
    console.log(`servidor iniciado en el puerto:http://localhost:${PORT}`);
});