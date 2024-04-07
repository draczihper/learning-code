const {readFile} = require("fs");
readFile("file.txt", (e, b) => {
if (e) throw error;
console.log("The file contained", buffer.length, "bytes.",
"The first byte is:", b[0]);
});