const { Router } = require("express");

const authController = require("../controller/user.controller");

const authUser = require("../middleware/auth.middleware");

const router = Router();

router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.get("/get-me", authUser, authController.getMe);
router.get("/logout", authController.logoutUser);

module.exports = router;
