const express = require("express");
const path = require("node:path");

const app = express();
app.set("view engine", "ejs");

app.get("/profile", (req, res) => {
	const user = { name: "Venus", age: 24 };
	res.render(path.join(__dirname, "7ejs"), { user });
});

app.listen(3000, () => console.log("Server is running on 3000"));
