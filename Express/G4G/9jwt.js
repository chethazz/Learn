const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

app.post("/login", async (req, res, next) => {
	const { email, password } = req.body;

	let existingUser;

	try {
		existingUser = await User.findOne({ email: email });
	} catch (err) {
		console.error(err);
		const error = new Error("Something went wrong");
		return next(error);
	}

	if (!existingUser || existingUser.password !== password) {
		const error = Error("Invalid credentials");
		return next(error);
	}
	let token;
	try {
		token = jwt.sign(
			{
				userId: existingUser.id,
				email: existingUser.email,
			},
			"secretkeyappearshere",
			{ expiresIn: "1h" },
		);
	} catch (err) {
		console.error(err);
		const error = new Error("Invalid credentials");
		return next(error);
	}

	res.status(200).json({
		success: true,
		data: {
			userId: existingUser.id,
			email: existingUser.email,
			token,
		},
	});
});

app.post("/signup", async (req, res, next) => {
	const { name, email, password } = req.body;

	const newUser = User({
		name,
		email,
		password,
	});

	try {
		await newUser.save();
	} catch (err) {
		console.error(err);
		const error = new Error("Something went worng");
		return next(error);
	}

	let token;
	try {
		token = jwt.sign(
			{
				userId: newUser.id,
				email: newUser.email,
			},
			"secretkeyappearshere",
			{ expiresIn: "1hr" },
		);
	} catch (err) {
		console.error(err);
		const error = new Error("Something went wrong");
		return next(error);
	}

	res.status(201).json({
		success: true,
		data: {
			userId: newUser.id,
			email: newUser.email,
			token,
		},
	});
});

// mongodb logic
