import express from "express";
import { addPost } from "../Controllers/post.controller.js";
import { auth } from "../Middleware/auth.js";
import { validate } from "../Middleware/validation.js";
import { postSchema } from "../Validation/post.validation.js";

const router = express.Router();

router.post("/", auth, validate(postSchema), addPost);

export default router;
