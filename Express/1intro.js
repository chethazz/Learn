const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("Hello world");
});

app.get("/get", (req, res) => {
	res.send("This is a GET request");
});

app.post("/post", (req, res) => {
	res.send("This is a POST request");
});

app.put("/put", (req, res) => {
	res.send("This is a PUT request");
});

app.delete("/delete", (req, res) => {
	res.send("This is a DELETE request");
});

app.all("/all", (req, res) => {
	res.send(`This handles all HTTP methods: ${req.method}`);
});

app.listen(3000, () => console.log("Server is listening on port 3000"));
