import express from "express";

const app = express();

app.get("/", (req, res) => {
	res.send("Hello world!");
});

app.get("/api/users", (req, res) => {
	res.send([
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
	]);
});

app.get("/api/products", (req, res) => {
	res.send([
		{
			id: 1,
			name: "Toned milk",
			price: 12.99,
		},
		{
			id: 2,
			name: "Skim milk",
			price: 11.99,
		},
	]);
});

app.listen(3000, () => console.log("Server running on 3000"));
