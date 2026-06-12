//(3) Write a Node.js program using moment to display the current date and time.
const moment = require('moment');
const dateTime = moment().format('DD-MM-YYYY HH:mm:ss');
console.log("Current Date and Time is:", dateTime);