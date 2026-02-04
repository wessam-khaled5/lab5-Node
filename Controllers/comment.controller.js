import { Comment } from "../Models/comment.model.js";

export const addComment = async (req, res, next) => {
  try {
    const comment = await Comment.create({
      content: req.body.content,
      userId: req.userId,
      postId: req.body.postId,
    });

    res.status(201).json({ message: "comment added", comment });
  } catch (error) {
    next(error);
  }
};


export const getPostComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId });
    res.json({ message: "success", comments });
  } catch (error) {
    next(error);
  }
};


export const updateComment = async (req, res, next) => {
  try {
    const comment = await Comment.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      { content: req.body.content },
      { new: true }
    );

    if (!comment) {
      return res
        .status(403)
        .json({ message: "not authorized or comment not found" });
    }

    res.json({ message: "updated", comment });
  } catch (error) {
    next(error);
  }
};


export const deleteComment = async (req, res, next) => {
  try {
    const comment = await Comment.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId,
    });

    if (!comment) {
      return res
        .status(403)
        .json({ message: "not authorized or comment not found" });
    }

    res.json({ message: "deleted" });
  } catch (error) {
    next(error);
  }
};
