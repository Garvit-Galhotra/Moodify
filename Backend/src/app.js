require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

const authRouter = require("./routes/user.routes");
const songRouter = require("./routes/song.routes");

app.use("/api/user", authRouter);
app.use("/api/songs", songRouter);

module.exports = app;
