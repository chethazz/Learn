import express from "express";

const app = express();

const mockUsers = [
	{
		id: 1,
		username: "venusdeluca",
		displayName: "Venus Deluca",
	},
	{
		id: 2,
		username: "regulus",
		displayName: "Regulus",
	},
];

app.get("/", (req, res) => {
	res.send("Hello world!");
});

app.get("/api/users", (req, res) => {
	res.send(mockUsers);
});

app.get("/api/users/:id", (req, res) => {
	const parsedId = parseInt(req.params.id);
	if (isNaN(parsedId)) {
		return res.status(400).send({ message: "Bad request. Invalid ID" });
	}

	const findUser = mockUsers.find((user) => user.id === parsedId);
	if (!findUser) {
		return res.status(404).send({ message: "Bad request. User not found" });
	}

	return res.send(findUser);
});

app.listen(3000, () => console.log("Server running on 3000"));
