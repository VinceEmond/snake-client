const {movements, messages} = require("./constants");

let session;

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
    process.exit();
  }

  // If the keypress matches a movement value
  if (movements[keypress]) {
    session.write(movements[keypress]);
  }

  // If the keypress matches a message value
  if (messages[keypress]) {
    session.write(messages[keypress]);
  }

};

module.exports = {
  setupInput
};