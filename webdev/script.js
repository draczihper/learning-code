const {readFile} = require("fs");
readFile("file.txt", (e, b) => {
if (e) throw error;
console.log("
Error");
});