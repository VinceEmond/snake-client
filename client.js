const { builtinModules } = require('module');
const net = require('net');

// const conn = net.createConnection({
//   host: "165.227.47.243",
//   port: 50541
// });


// establishes a connection with the game server
const connect = function() {


  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //As soon as your connected, do this
  conn.on("connect", (data) => {
    console.log("Data from server:", data);
    console.log("Succesfully connected to server");
    conn.write(`Name: 8=>`);
  });

  return conn;
};





module.exports = {
  connect
};