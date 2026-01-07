const fs = require("node:fs");

console.log("First");

// Use utf-8 here or fileContent.toString()
const fileContent = fs.readFileSync(__dirname + "/file.txt", "utf-8");
console.log("Sync", fileContent);

console.log("Second");

fs.readFile(__dirname + "/file.txt", "utf-8", (err, data) => {
	if (err) {
		console.error(err);
	} else {
		console.log("Async", data);
	}
});

console.log("Third");

// By default, writeFile overwrites file content

fs.writeFileSync(__dirname + "/greet.txt", "Hello world!");

fs.writeFile(
	__dirname + "/greet.txt",
	" Hello Venus Deluca",
	{ flag: "a" },
	(err) => {
		if (err) {
			console.error(err);
		} else {
			console.log("File written");
		}
	},
);
