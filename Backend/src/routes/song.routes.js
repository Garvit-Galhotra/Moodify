const { Router } = require("express");

const router = Router();

const songController = require("../controller/song.controller");
const upload = require("../middleware/upload.middleware");

/**
 * POST /api/songs/
 */

router.post("/", upload.single("song"), songController.uploadSongController);
router.get("/", songController.getSongController);

module.exports = router;
