const fs = require("node:fs");

console.log("First");

// async and non-blocking
fs.readFile(__dirname + "/15threadPool.txt", "utf-8", (err, data) => {
	console.log("File content");
});

console.log("Last");
