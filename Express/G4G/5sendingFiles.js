const express = require("express");
const path = require("node:path");

const app = express();

app.get("/static", (req, res) => {
	res.sendFile(path.join(__dirname + "/1intro.js"));
});

app.listen(3000, (error) => {
	if (error) {
		console.log("Error occurred, server cannot be started!");
	} else {
		console.log("Server is running on port 3000");
	}
});
