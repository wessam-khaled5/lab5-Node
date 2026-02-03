import { Post } from "../Models/post.model.js";

export const addPost = async (req, res, next) => {
  try {
    const post = await Post.create({
      ...req.body,
      userId: req.userId,
    });
    res.status(201).json({ message: "added", post });
  } catch (error) {
    next(error);
  }
};
