import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const token = req.headers.token;

  jwt.verify(token, "secretKey", (err, decoded) => {
    if (err) return res.status(401).json({ message: "invalid token" });

    req.userId = decoded.id;
    next();
  });
};
