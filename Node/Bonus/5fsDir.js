const fs = require("node:fs");

// Monitor changes in a directory
fs.watch(__dirname, (eventType, filename) => {
	console.log(`Event: ${eventType}`);
	if (filename) {
		console.log(`Filename: ${filename}`);
	}
});
