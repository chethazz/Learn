const fs = require("node:fs");

fs.readFile(__filename, () => {
	console.log("This is readFile 1");
	setImmediate(() => {
		console.log("This is nested setImmediate inside readFile 1");
	});
	process.nextTick(() => {
		console.log("This is the nested process.nextTick inside readFile 1");
	});
	Promise.resolve().then(() => {
		console.log("This is the nested Promise.resolve inside readFile 1");
	});
});

process.nextTick(() => console.log("This is process.nextTick 1"));
Promise.resolve().then(() => console.log("This is Promise.resolve 1"));
setTimeout(() => console.log("This is setTimeout 1"));

for (let i = 0; i < 2000000000; i++) {}
