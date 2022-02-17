const net = require("net");
const {connect} = require("./client");

// setup interface to handle user input from stdin
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


const handleUserInput = (keypress) => {

  //Check for Ctrl+C to quit
  if (keypress === '\u0003') {
    //console.log("Thanks for using me, ciao!");
    process.exit();
  }

  if (inputs[keypress]) {
    session.write(inputs[keypress]);
  }

};

const inputs = {
  "w": "Move: up",
  "s":"Move: down",
  "a" :"Move: left",
  "d":"Move: right"
};

console.log("Connecting ...");
let session = connect();
setupInput();

