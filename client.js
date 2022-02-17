const { builtinModules } = require('module');
const net = require('net');

// const conn = net.createConnection({
//   host: "165.227.47.243",
//   port: 50541
// });


const conn = net.createConnection({
  host: "165.227.47.243",
  port: 50541
});


// establishes a connection with the game server
const connect = function() {


  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  //As soon as your connected, do this
  conn.on("connect", (data) => {
    console.log("Data from server:", data);
    console.log("Succesfully connected to server");
    conn.write(`Name: 8=>`);

  });

 



  // "Move: up";
  // "Move: down";
  // "Move: left";
  // "Move: right";

  // conn.on('data', function(key) {

  //   // ctrl-c to be able to exit
  //   if (key === '\u0003') {
  //     console.log("Thanks for using me, ciao!");
  //     process.exit();
  //   }
  
  //   if (inputs[key]) {
  //     if (inputs[key] === 1) {
  //       console.log("BEEP BEEP MOTHERFUCKER!");
  //       process.stdout.write('\x07');
  //     } else if (inputs[key] !== 1) {
  //       createAlarm(inputs[key]);
  //     }
  //   }
  // });


  return conn;
};

// conn.on("connect", (data) => {
//   setTimeout(() => {
//     conn.write(`Move: up`);
//   }, 1000);
// });

// conn.on("connect", (data) => {
//   setTimeout(() => {
//     conn.write(`Move: up`);
//   }, 2000);
// });






module.exports = {
  connect
};