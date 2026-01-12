const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/accessResource", (req, res) => {
	const token = req.headers.authorization.split(" ")[1];
	// Authorization: Bearer token
	if (!token) {
		res.status(200).json({
			success: false,
			message: "Invalid credentials",
		});
	}

	const decodedToken = jwt.verify(token, "secretkeyappearshere");
	res.status(200).json({
		success: true,
		data: {
			userId: decodedToken.userId,
			email: decodedToken.email,
		},
	});
});
