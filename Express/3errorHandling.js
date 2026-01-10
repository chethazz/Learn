const express = require("express");
const app = express();

app.get("/error", (req, res, next) => {
	const err = new Error("Something went wrong!");
	err.status = 500;
	next(err);
});

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(err.status || 500).send({
		message: err.message,
		status: err.status || 500,
	});
});

app.listen(3000, () => console.log("Server is running on port 3000"));
