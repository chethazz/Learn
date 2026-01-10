const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.status(200);
	res.send("Welcome to root page");
});

app.get("/hello", (req, res) => {
	// res.set is not required when using res.send()/res.json()
	// res.set("Content-Type", "text/html");
	res.status(200).send("<h1>Hello, It's Venus Deluca!</h1>");
});

app.listen(3000, (error) => {
	if (error) {
		console.log("Error occurred, server cannot be started!");
	} else {
		console.log("Server is running on port 3000");
	}
});
