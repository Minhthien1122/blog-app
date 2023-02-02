import express from "express";
import authRouter from "./routes/auth.js";
import postRouter from "./routes/posts.js";
import userRouter from "./routes/users.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

app.listen(8800, () => {
  console.log("Connected!");
});
