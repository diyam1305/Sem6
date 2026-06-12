//(2) Write a Node.js program using the os module to display system details(OS type, memory, CPU info).
const os = require("os");
console.log(os.type());
console.log(os.totalmem()/(1024*1024*1024).toFixed(2));
console.log(os.freemem()/(1024*1024*1024).toFixed(2));
console.log(os.cpus()[0]);