require("dotenv").config();
const express = require("express");
const server = express();
server.use(express.json());
const port = process.env.PORT || 4003;

const initSongs = [
  {
    id: 1,
    artist: "Europe",
    name: "Final Countdown",
    videoURL: "https://youtu.be/9jK-NcRmVcw",
    test: process.env.OS
  },
  {
    id: 2,
    artist: "Heart",
    name: "Barracuda",
    videoURL: "https://youtu.be/PeMvMNpvB5M"
  },
  {
    id: 3,
    artist: "Kansas",
    name: "Carry on Wayward Son",
    videoURL: "https://youtu.be/P5ZJui3aPoQ"
  },
  {
    id: 4,
    artist: "Electric Light Orchestra",
    name: "Mr. Blue Sky",
    videoURL: "https://youtu.be/aQUlA8Hcv4s"
  },
  {
    id: 5,
    artist: "Survivor",
    name: "Eye of the Tiger",
    videoURL: "https://youtu.be/btPJPFnesV4"
  },
  {
    id: 6,
    artist: "Salt-N-Pepa",
    name: "Push It",
    videoURL: "https://youtu.be/vCadcBR95oU"
  }
];

server.get("/", (req, res) => {
  res.status(200).json(initSongs);
});

server.listen(port, () => console.log(`\n** listening on port ${port}`));
