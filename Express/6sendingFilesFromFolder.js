const express = require("express");

const app = express();

app.use("/static", express.static(__dirname));

app.listen(3000, (error) => {
	if (error) {
		console.log("Error occurred, server cannot be started!");
	} else {
		console.log("Server is running on port 3000");
	}
});
