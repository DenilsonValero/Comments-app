
export const insertComment = async (db, commentData, userId) => {
  try {
    console.log("🔍 Inserting comment for user ID:", userId);
    console.log("📝 Comment data:", commentData);
    const insertCommentQuery = `
      INSERT INTO comments (user_id, comment_text)
      VALUES (?, ?)
    `;

    const { comment_text } = commentData;

    // Ejecutamos la query usando el modo "promise"
    const [results] = await db.query(insertCommentQuery, [userId, comment_text]);

    console.log("✅ Comment inserted successfully:", results);
    return results;

  } catch (error) {
    console.error("❌ Error inserting comment:", error);
    throw error;
  }
};


export const readComments = async (db) => {
  try {
    console.log("🔍 Reading all comments");
    const readCommentsQuery = `
      SELECT * FROM comments
    `;

    const [results] = await db.query(readCommentsQuery);

    console.log("✅ Comments retrieved successfully:", results);
    return results;

  } catch (error) {
    console.error("❌ Error reading comments:", error);
    throw error;
  }
};

export const updateComment = async (db, commentId, commentData) => {
  try {
    console.log("🔍 Updating comment ID:", commentId);
    console.log("📝 New comment data:", commentData);
    const updateCommentQuery = `
      UPDATE comments
      SET comment_text = ?
      WHERE comment_id = ?
    `;

    const { comment_text } = commentData;

    const [results] = await db.query(updateCommentQuery, [comment_text, commentId]);

    console.log("✅ Comment updated successfully:", results);
    return results;

  } catch (error) {
    console.error("❌ Error updating comment:", error);
    throw error;
  }
};

export const deleteComment = async (db, commentId) => {
  try {
    console.log("🔍 Deleting comment ID:", commentId);
    const deleteCommentQuery = `
      DELETE FROM comments
      WHERE comment_id = ?
    `;

    const [results] = await db.query(deleteCommentQuery, [commentId]);

    console.log("✅ Comment deleted successfully:", results);
    return results;

  } catch (error) {
    console.error("❌ Error deleting comment:", error);
    throw error;
  }
};
