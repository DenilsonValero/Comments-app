
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
