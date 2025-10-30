
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const commentsRouter = require('./routers/comments.js');
const userRouter = require('./routers/user.js');



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });
dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/comments', commentsRouter);
app.use('/users', userRouter);

app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});

app.listen(PORT, () => {
    console.log(`servidor iniciado en el puerto:http://localhost:${PORT}`);
});