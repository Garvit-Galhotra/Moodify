const songModel = require("../model/song.model");
const storageServices = require("../services/storage.service");
const id3 = require("node-id3");

async function uploadSongController(req, res) {
  const songBuffer = req.file.buffer;
  const tags = id3.read(songBuffer);

  const { mood } = req.body;

  const [songFile, posterFile] = await Promise.all([
    storageServices.uploadFile({
      buffer: songBuffer,
      filename: tags.title + ".mp3",
      folder: "/cohort-2/moodify/songs",
    }),
    storageServices.uploadFile({
      buffer: tags.image.imageBuffer,
      filename: tags.title + ".jpeg",
      folder: "/cohort-2/moodify/poster",
    }),
  ]);

  const song = await songModel.create({
    title: tags.title,
    url: songFile.url,
    posterUrl: posterFile.url,
    mood,
  });

  res.status(201).json({
    message: "Song created successfully",
    song,
  });
}

async function getSongController(req, res) {
  const { mood } = req.query;
  const song = await songModel.findOne({ mood });

  res.status(200).json({
    message: "song fetched successfully",
    song,
  });
}

module.exports = { uploadSongController, getSongController };
