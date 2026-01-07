const fs = require("node:fs/promises");

// Callback based fs module is preferred when maximal performance is required.
// Else stick with promise based fs module

console.log("First");

async function readFile() {
	try {
		const data = await fs.readFile(__dirname + "/file.txt", "utf-8");
		console.log(data);
	} catch (error) {
		console.error(error);
	}
}

readFile();

console.log("Second");
