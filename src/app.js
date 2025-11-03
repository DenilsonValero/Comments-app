
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import commentsRouter from './routers/comments.js';
import userRouter from './routers/user.js';
import reactionRouter from './routers/reactionRouter.js';

// Rutas absolutas y dotenv
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Configuración del servidor
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/comments', commentsRouter);
app.use('/users', userRouter);
app.use('/reactions', reactionRouter);

app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});

app.listen(PORT, () => {
    console.log(`✅ Servidor iniciado en: http://localhost:${PORT}`);
});