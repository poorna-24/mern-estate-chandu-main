import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-route.js";
import authRouter from "./routes/auth-route.js";
import cookieParser from "cookie-parser";
import path from "path";
const app = express();
app.use(express.json());
app.use(cookieParser());
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to DB!"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));

const __dirname = path.resolve();

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

//Create a middleware and a function to handle possible errors
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({ success: false, statusCode, message });
});
