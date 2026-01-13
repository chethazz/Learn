import express from "express";

const app = express();

app.use(express.json());

const resolveIndexUserById = (req, res, next) => {
	const parsedId = parseInt(req.params.id);

	if (isNaN(parsedId)) {
		return res.status(400).send({ message: "Bad request. Invalid ID" });
	}

	const userIndex = mockUsers.findIndex((user) => user.id === parsedId);

	if (userIndex === -1) {
		return res.status(404).send({ message: "User not found" });
	}
	req.parsedId = parsedId;
	req.userIndex = userIndex;
	next();
};

const mockUsers = [
	{ id: 1, username: "venusdeluca", displayName: "Venus Deluca" },
	{ id: 2, username: "regulus", displayName: "Regulus" },
	{ id: 3, username: "deserteagle", displayName: "Desert Eagle" },
	{ id: 4, username: "happygamer", displayName: "Happy Gamer" },
	{ id: 5, username: "eventloop", displayName: "Event Loop" },
	{ id: 6, username: "callstack", displayName: "Callstack" },
];

app.get("/", (req, res) => {
	res.send("Hello world!");
});

app.get("/api/users", (req, res) => {
	const { filter, value } = req.query;

	if (filter && value) {
		return res.send(mockUsers.filter((user) => user[filter].includes(value)));
	}

	return res.send(mockUsers);
});

app.post("/api/users", (req, res) => {
	const newUser = { id: mockUsers[mockUsers.length - 1].id + 1, ...req.body };
	mockUsers.push(newUser);
	return res.status(201).send(newUser);
});

app.get("/api/users/:id", resolveIndexUserById, (req, res) => {
	return res.send(mockUsers[req.userIndex]);
});

app.put("/api/users/:id", resolveIndexUserById, (req, res) => {
	mockUsers[req.userIndex] = {
		id: req.parsedId,
		username: req.body.username || mockUsers[req.userIndex].username,
		displayName: req.body.displayName || mockUsers[req.userIndex].displayName,
	};

	return res.status(200).send(mockUsers[req.userIndex]);
});

app.patch("/api/users/:id", resolveIndexUserById, (req, res) => {
	mockUsers[req.userIndex] = { ...mockUsers[req.userIndex], ...req.body };

	return res.status(200).send(mockUsers[req.userIndex]);
});

app.delete("/api/users/:id", resolveIndexUserById, (req, res) => {
	const deletedUser = mockUsers.splice(req.userIndex, 1);

	return res.status(200).send(deletedUser);
});

app.listen(3000, () => console.log("Server running on 3000"));
