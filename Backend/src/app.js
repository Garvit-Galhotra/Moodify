require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/user.routes");

app.use("/api/user", authRouter);
module.exports = app;
