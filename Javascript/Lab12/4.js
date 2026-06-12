//(4) Write a Node.js program using the util module to format strings and debug logs. 
const util = require('util');
const sampleObject = {
  name: "Meow",
  skills: ["Node.js", "JavaScript", "Backend"],
  nested: {
    level: 1,
    active: true
  }
};
console.log("Inspecting object:");
console.log(util.inspect(sampleObject, { depth: null, colors: true }));
const name = "Meow";
const age = 18;
console.log(util.format("My name is %s and I am %d years old.", name, age));