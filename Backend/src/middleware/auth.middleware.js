const userModel = require("../model/user.model");
const jwt = require("jsonwebtoken");
const blackListModel = require("../model/blacklist.model");
const redis = require("../config/cache");

async function authUser(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }

  const isTokenBlacklist = await redis.get(token);

  if (isTokenBlacklist) {
    return res.status(401).json({
      message: "User not authorized",
    });
  }

  let decoded = null;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    throw err;
  }

  req.user = decoded;

  next();
}

module.exports = authUser;
