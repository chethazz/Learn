const fs = require("node:fs");
const zlib = require("node:zlib");

// Enables destination stream to support chaining
const gzip = zlib.createGzip();

const readableStream = fs.createReadStream(__dirname + "/file.txt", {
	encoding: "utf-8",
	highWaterMark: 2,
});

readableStream.pipe(gzip).pipe(fs.WriteStream(__dirname + "/file3.txt.gz"));

const writableStream = fs.createWriteStream(__dirname + "/file3.txt");

// Pipe returns destination stream(Enable's chaining)
// But destination stream has to be readable, duplex or transform
readableStream.pipe(writableStream);
