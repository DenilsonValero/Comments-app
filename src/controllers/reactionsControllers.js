import db from '../config/DB.js';

// ✅ Crear o actualizar reacción (LIKE / DISLIKE)
export const toggleReaction = async (req, res) => {
  try {
    const { user_id, comment_id, status } = req.body;
// validacion de entrada

    if (!user_id || !comment_id || !status) {
      return res.status(400).json({ error: 'user_id, comment_id y status son requeridos' });
    }
// validacion de status
    if (!['LIKE', 'DISLIKE'].includes(status)) {
      return res.status(400).json({ error: 'status debe ser LIKE o DISLIKE' });
    }
// verificar si ya existe una reaccion del usuario para el comentario
    const [existing] = await db.query(
      'SELECT * FROM reactions WHERE user_id = ? AND comment_id = ?',
      [user_id, comment_id]
    );

    if (existing.length > 0) {
      if (existing[0].status === status) {
        await db.query('DELETE FROM reactions WHERE user_id = ? AND comment_id = ?', [user_id, comment_id]);
        return res.json({ message: `Reacción eliminada (${status})` });
    // si el usuario reacciona nuevamente con la misma reaccion, se elimina  
    } else {
        await db.query('UPDATE reactions SET status = ? WHERE user_id = ? AND comment_id = ?', [status, user_id, comment_id]);
        return res.json({ message: `Reacción actualizada a ${status}` });
    // si el usuario cambia su reaccion, se actualiza    
      }
    } else {
      await db.query('INSERT INTO reactions (user_id, comment_id, status) VALUES (?, ?, ?)', [user_id, comment_id, status]);
      return res.json({ message: `Reacción registrada: ${status}` });
    // si no existe, se crea una nueva reaccion  
    }
  } catch (error) {
    console.error('Error al manejar la reacción:', error);
    res.status(500).json({ error: 'Error al manejar la reacción' });
  }
};

// ✅ Obtener resumen de reacciones por comentario
export const getReactionsByComment = async (req, res) => {
  try {
    const { comment_id } = req.params;
    const [results] = await db.query(
      'SELECT status, COUNT(*) AS count FROM reactions WHERE comment_id = ? GROUP BY status',
      [comment_id]
    );
    res.json(results);
  } catch (error) {
    console.error('Error al obtener reacciones:', error);
    res.status(500).json({ error: 'Error al obtener reacciones' });
  }
};
