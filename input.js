const net = require("net");
const {connect} = require("./client");

let session;

const movements = {
  "w": "Move: up",
  "s":"Move: down",
  "a" :"Move: left",
  "d":"Move: right"
};

const messages = {
  "e": "Say: Never gonna",
  "r": "Say: give you up",
  "t": "Say: let you down",
  "y": "Say: run around",
  "u": "Say: and desert you",
  "i": "Say: make you cry",
  "o": "Say: say goodbye",
  "p": "Say: tell a lie",
  "[": "Say: and hurt you"
};
// const messages = {
//   "y": "Say: ~~",
//   "u": "Say: ~~~~",
//   "i": "Say: ~~~~~~",
//   "o": "Say: ~~~~~~~~~",
//   "p": "Say: ~~~~~~~~~~~",
// };

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  session = conn;
  return stdin;
};

const handleUserInput = (keypress) => {

  //Check for Ctrl+C to quit
  if (keypress === '\u0003') {
    //console.log("Thanks for using me, ciao!");
    process.exit();
  }

  // If the keypress if a valid
  if (movements[keypress]) {
    session.write(movements[keypress]);
  }

  if (messages[keypress]) {
    session.write(messages[keypress]);
  }


};


module.exports = {
  setupInput
};