console.log("Each one teach one");

const fs = require("fs");

const _ = require("lodash");

const notes = require("./notes.js");

console.log(process.argv[2]);
console.log(process.argv);

var command = process.argv[2];

if (command === "list") {
    console.log("List all Notes");
} else if (command === "read") {
    console.log("Read Note");
} else if (command === "create") {
    console.log("Note Created");
} else if (command === "remove") {
    console.log("Note Removed");
} else {
    console.log("Command not found");
}