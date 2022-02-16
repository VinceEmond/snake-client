const { builtinModules } = require('module');
const net = require('net');

const conn = net.createConnection({
  host: "localhost",
  port: 3000
});


// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost', // IP address here,
    port: 3000// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};


conn.on("connect", (data) => {
  console.log("Data from server:", data);
});


module.exports = {
  connect
};