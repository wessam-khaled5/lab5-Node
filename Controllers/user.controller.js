import { User } from "../Models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendEmail } from "../Utils/sendEmail.js";

export const signup = async (req, res, next) => {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 8);
    const user = await User.create(req.body);

    await sendEmail(user.email);

    res.status(201).json({ message: "success", user });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).json({ message: "email not found" });

    const match = bcrypt.compareSync(req.body.password, user.password);
    if (!match) return res.status(401).json({ message: "wrong password" });

    const token = jwt.sign({ id: user._id }, "secretKey");
    res.json({ message: "login success", token });
  } catch (error) {
    next(error);
  }
};
