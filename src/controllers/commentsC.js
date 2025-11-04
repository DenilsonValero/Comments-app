import e from "express";
import db from "../config/DB.js";
import { insertComment, readComments, updateComment, deleteComment } from "../operations/commentOperations.js";

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

export const getComments = async (req, res) => {
  try {
    const results = await readComments(db);
    res.status(200).json({
      message: "✅ Comments retrieved successfully",
      comments: results,
    });
  } catch (error) {
    res.status(500).json({ error: "Error retrieving comments" });
  }
};


export const editComment = async (req, res) => {
  try {
    const commentId = parseInt(req.params.id, 10);
    const commentData = req.body;

    if (isNaN(commentId)) {
      return res.status(400).json({ error: "Invalid or missing comment ID" });
    }

    if (!commentData || Object.keys(commentData).length === 0) {
      return res.status(400).json({ error: "No comment data provided" });
    }

    if (!commentData.comment_text || commentData.comment_text.trim() === "") {
      return res.status(400).json({ error: "Comment text is required" });
    }

    const results = await updateComment(db, commentId, commentData);

    res.status(200).json({
      message: "✅ Comment updated successfully",
      affectedRows: results.affectedRows,
    });

  } catch (error) {
    res.status(500).json({ error: "Error updating comment" });
  }
};

export const removeComment = async (req, res) => {
  try {
    const commentId = parseInt(req.params.id, 10);

    if (isNaN(commentId)) {
      return res.status(400).json({ error: "Invalid or missing comment ID" });
    }

    const results = await deleteComment(db, commentId);

    res.status(200).json({
      message: "✅ Comment deleted successfully",
      affectedRows: results.affectedRows,
    });
  } catch (error) {
    res.status(500).json({ error: "Error deleting comment" });
  }
};
