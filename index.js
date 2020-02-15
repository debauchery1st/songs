require("dotenv").config();
const express = require("express");
const server = express();
const helmet = require("helmet");
server.use(express.json());
server.use(helmet());

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
  },
  {
    id: 8,
    artist: "Kanako Itou",
    name: "Hacking to the Gate",
    videoURL: "https://youtu.be/tdjthJXntrk"
  },
  {
    id: 9,
    artist: "Clinic",
    name: "Harmony",
    videoURL: "https://youtu.be/FxeEXlJsINQ"
  },
  {
    id: 10,
    artist: "Clinic",
    name: "Come Into Our Room",
    videoURL: "https://youtu.be/KDbQJ7x9Blw"
  },
  {
    id: 11,
    artist: "Blonde Redhead",
    name: "Magic Mountain",
    videoURL: "https://youtu.be/ywUmY-jb8-o"
  },
  {
    id: 12,
    artist: "Blonde Redhead",
    name: "Golden Light",
    videoURL: "https://youtu.be/0gtTy2YWGbQ"
  },
  {
    id: 13,
    artist: "Sugarcubes",
    name: "Cat",
    videoURL: "https://youtu.be/Mo2_q-TLHBQ"
  },
  {
    id: 14,
    artist: "House of Pain",
    name: "Jump Around",
    videoURL: "https://youtu.be/XhzpxjuwZy0"
  },
  {
    id: 15,
    artist: "PIZZICATO FIVE",
    name: "It's A Beautiful Day",
    videoURL: "https://youtu.be/cgdy-pNni-8"
  },
  {
    id: 16,
    artist: "Joy Division",
    name: "Transmission",
    videoURL: "https://youtu.be/6dBt3mJtgJc"
  },
  {
    id: 17,
    artist: "Pixies",
    name: "Where is my mind",
    videoURL: "https://youtu.be/I_aBmrYChfQ"
  },
  {
    id: 18,
    artist: "The Strokes",
    name: "Hard to Explain",
    videoURL: "https://youtu.be/BXkm6h6uq0k"
  },
  {
    id: 19,
    artist: "Weezer",
    name: "Buddy Holly",
    videoURL: "https://youtu.be/kemivUKb4f4"
  },
  {
    id: 20,
    artist: "The Breeders",
    videoURL: "https://youtu.be/fxvkI9MTQw4"
  },
  {
    id: 21,
    artist: "Fatboy Slim & Wildchild",
    name: "Renegade Master",
    videoURL: "https://youtu.be/K9QhSZ_vD8I"
  },
  {
    id: 22,
    artist: "Blur",
    name: "Song 2",
    videoURL: "https://youtu.be/SSbBvKaM6sk"
  },
  {
    id: 23,
    artist: "Stereo MC's",
    name: "Connected",
    videoURL: "https://youtu.be/f7KyKb-Im90"
  },
  {
    id: 24,
    artist: "Beastie Boys",
    name: "Intergalactic"
  },
  {
    id: 25,
    artist: "Harvey Danger",
    name: "Flagpole Sitta",
    videoURL: "https://youtu.be/jJo0MT3wDBs"
  },
  {
    id: 26,
    artist: "The White Stripes",
    name: "Seven Nation Army",
    videoURL: "https://youtu.be/y9ANOzmSKQg"
  },
  {
    id: 27,
    artist: "Cake",
    name: "The Distance",
    videoURL: "https://youtu.be/F_HoMkkRHv8"
  },
  {
    id: 28,
    artist: "Portishead",
    name: "Wandering Star"
  },
  {
    id: 29,
    artist: "Sister Rosetta Tharpe",
    name: "This Train",
    videoURL: "https://youtu.be/jOrhjgt-_Qc"
  },
  {
    id: 30,
    artist: "M A R R S",
    name: "Pump Up The Volume",
    videoURL: "https://youtu.be/w9gOQgfPW4Y"
  },
  {
    id: 31,
    artist: "New Order",
    name: "Blue Monday",
    videoURL: "https://youtu.be/iOEJHNZpeck"
  },
  {
    id: 32,
    artist: "Simple Minds",
    name: "Don't You (Forget About Me)",
    videoURL: "https://youtu.be/z8v84520W6s"
  },
  {
    id: 33,
    artist: "The Mamas & The Papas",
    name: "California Dreamin'",
    videoURL: "https://youtu.be/N-aK6JnyFmk"
  },
  {
    id: 34,
    artist: "Simon & Garfunkel",
    name: "The Sounds of Silence",
    videoURL: "https://youtu.be/4fWyzwo1xg0"
  },
  {
    id: 35,
    artist: "Radiohead",
    name: "Street Spirit (Fade Out)",
    videoURL: "https://youtu.be/LCJblaUkkfc"
  },
  {
    id: 36,
    artist: "The xx",
    name: "Intro",
    videoURL: "https://youtu.be/qFq6nnw7xg0"
  },
  {
    id: 37,
    artist: "Crystal Castles",
    name: "Untrust Us",
    videoURL: "https://youtu.be/J8dT46asgTk"
  },
  {
    id: 38,
    artist: "Helmet",
    name: "Unsung",
    videoURL: "https://youtu.be/jBfygUiS50g"
  },
  {
    id: 39,
    artist: "Dinosaur Jr.",
    name: "Feel the Pain",
    videoURL: "https://youtu.be/OkkKimuDNIQ"
  },
  {
    id: 40,
    artist: "Republica",
    name: "Ready to Go",
    videoURL: "https://youtu.be/JgffRW1fKDk"
  }
];

server.get("/", (req, res) => {
  res.status(200).json(initSongs);
});

server.listen(port, () => console.log(`\n** listening on port ${port}`));
