import express from "express";
import userRouter from "./routes/userRouter.js";
import tweetsRouter from "./routes/tweetsRouter.js";
const app = express();

app.use(express.json());

app.use(userRouter);
app.use(tweetsRouter);

export default app;
