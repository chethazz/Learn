const fs = require("node:fs");

const readableStream = fs.createReadStream(__dirname + "/file.txt", {
	encoding: "utf-8",
	highWaterMark: 2, // Buffer has size 64KB by default
});

const writableStream = fs.createWriteStream(__dirname + "/file2.txt");

readableStream.on("data", (chunk) => {
	console.log(chunk);
	writableStream.write(chunk);
});
