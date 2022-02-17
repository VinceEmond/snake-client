const PORT = 50541;
const IP = "165.227.47.243";

const movements = {
  "w": "Move: up",
  "s":"Move: down",
  "a" :"Move: left",
  "d":"Move: right"
};

const messages = {
  "e": `Say: Never gonna`,
  "r": "Say: give you up",
  "t": "Say: let you down",
  "y": "Say: run around",
  "u": "Say: and desert you",
  "i": "Say: make you cry",
  "o": "Say: say goodbye",
  "p": "Say: tell a lie",
  "[": "Say: and hurt you"
};

module.exports = {
  IP,
  PORT,
  movements,
  messages
};