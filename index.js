const express = require("express");
const server = express();
server.use(express.json());
const port = 4003;

const initSongs = [{ id: 1, name: "Final Countdown" }];

server.get("/", (req, res) => {
  res.status(200).json(initSongs);
});

server.listen(port, () => console.log(`\n** listening on port ${port}`));
