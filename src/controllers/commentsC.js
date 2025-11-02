import db from "../config/db.js";
import { insertComment } from "../operations/commentOperations.js";

export const addComment = async (req, res) => {
  try {
    const commentData = req.body;
    const userId = parseInt(req.params.id, 10);

    if (isNaN(userId)) {
     return res.status(400).json({ error: "Invalid or missing user ID" });
    }

    if (!commentData || Object.keys(commentData).length === 0) {
      return res.status(400).json({ error: "No comment data provided" });
    }

    if (!commentData.comment_text || commentData.comment_text.trim() === "") {
    return res.status(400).json({ error: "Comment text is required" });
    }

    const results = await insertComment(db, commentData, userId);

    res.status(201).json({
      message: "✅ Comment added successfully",
      commentId: results.insertId,
    });

  } catch (error) {
    res.status(500).json({ error: "Error inserting comment" });
  }
}
