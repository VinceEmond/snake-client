// const { builtinModules } = require('module');
const net = require('net');
const {IP, PORT} = require("./constants");


const session = net.createConnection({
  host: IP,
  port: PORT
});

// establishes a connection with the game server
const connect = function() {

  // interpret incoming data as text
  session.setEncoding("utf8");

  //As soon as your connected, do this
  session.on("connect", (data) => {
    //console.log("Data from server:", data);
    console.log("Succesfully connected to server");
    session.write(`Name: >>>`);

  });

  return session;
};


module.exports = {
  connect
};