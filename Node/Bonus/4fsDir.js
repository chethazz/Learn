const fs = require("node:fs");

fs.readdir(__dirname, (err, files) => {
	if (err) {
		console.error(err);
	} else {
		console.log("Async", files);
	}
});

const files = fs.readdirSync(__dirname);
console.log("Sync", files);

const dirname = "venus";
if (fs.existsSync(dirname)) {
	console.log("Directory exists");
} else {
	console.log("Directory does not exist");
}
