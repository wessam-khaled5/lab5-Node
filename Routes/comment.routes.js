import express from "express";
import {
  addComment,
  getPostComments,
  updateComment,
  deleteComment,
} from "../Controllers/comment.controller.js";
import { auth } from "../Middleware/auth.js";

const router = express.Router();


router.post("/", auth, addComment);


router.get("/:postId", getPostComments);


router.put("/:id", auth, updateComment);


router.delete("/:id", auth, deleteComment);

export default router;
