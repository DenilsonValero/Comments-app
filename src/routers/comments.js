const express = require('express');
const router = express.Router();
const db = require('../config/DB.js');


router.get('/', async (req, res) => {
    try {
        const [comentarios] = await db.query('SELECT * FROM comments');
            res.status(200).json({ msg: 'comentarios obtenidos', data: comentarios});
    }
    catch (err) {
        console.error(err.message);
            res.status(500).json({ msg: 'Server Error',err });
        }
});


router.post('/', async (req, res) => {
    try {
        const { comment } = req.body;
            if (!comment) {
                return res.status(400).json({ msg: 'El campo "comment" es requerido' });
    }

    const [resultado] = await db.query('INSERT INTO comments (comment) VALUES (?)',
        [comment]);
            res.status(201).json({msg: 'Comentario agregado correctamente',id_insertado: resultado.insertId});
        } 
catch (err) {
    console.error(err.message);
        res.status(500).json({ msg: 'Server Error',err });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { comment } = req.body;
            if (!comment) {
                return res.status(400).json({ msg: 'El campo "comment" es requerido' });
    }
    const [resultado]= await db.query("UPDATE comments SET comment= ? WHERE idcomments = ?",
        [comment, id]);
            if (resultado.affectedRows === 0) {
                return res.status(404).json({ msg: 'el comentaro no fue encontrado o no existe' });
    }
    res.status(200).json({msg:"comentario actualizado correctamente"});
    }
    catch(err){
        console.error(err);
        res.status(500).json({msg:"error del servidor", err});

    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const [resultado] = await db.query('DELETE FROM comments WHERE idcomments = ?',
            [id]);
            if(resultado.affectedRows === 0){
                return res.status(404).json({ msg: 'el comentario no fue encontrado o no existe' });
    }
        res.status(200).json({ msg: 'comentario eliminado correctamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server Error', err });
    }
});

module.exports = router;