import express from "express";
import { dbConnection } from "./Database/dbConnection.js";
import userRouter from "./Routes/user.routes.js";
import postRouter from "./Routes/post.routes.js";
import { globalError } from "./Middleware/errorHandler.js";

const app = express();
app.use(express.json());

dbConnection();

app.use("/users", userRouter);
app.use("/posts", postRouter);

app.use(globalError);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
