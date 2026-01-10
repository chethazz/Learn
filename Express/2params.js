const express = require("express");
const app = express();
app.use(express.json());

app.get("/users/:id", (req, res) => {
	const userId = req.params.id;
	res.send(`User ID is ${userId}`);
});

app.get("/search", (req, res) => {
	const searchTerm = req.query.term;
	res.send(`Searching for ${searchTerm}`);
});

app.post("/users", (req, res) => {
	const { name, age } = req.body;
	res.send(`User created: ${name}, Age: ${age}`);
});

app.listen(3000, () => console.log("Server is running on port 3000"));
