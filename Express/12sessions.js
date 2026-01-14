import cookieParser from "cookie-parser";
import express from "express";
import session from "express-session";
import routes from "./12routes/index.js";
import { mockUsers } from "./utils/constants.js";

const app = express();

app.use(express.json());
app.use(cookieParser("helloworld"));
app.use(
	session({
		secret: "regulus the dev",
		saveUninitialized: false,
		resave: false,
		cookie: {
			maxAge: 1000 * 60 * 60 * 2,
		},
	}),
);
app.use(routes);

app.get("/", (req, res) => {
	console.log(req.session);
	console.log(req.sessionID);
	req.session.visited = true;
	res.cookie("hello", "world", {
		maxAge: 1000 * 60 * 60 * 2,
		signed: true,
	});
	res.send("Hello world!");
});

app.post("/api/auth", (req, res) => {
	const { username, password } = req.body;

	const findUser = mockUsers.find((user) => user.username === username);
	if (!findUser || findUser.password !== password) {
		return res.status(401).send({ message: "Invalid credentials" });
	}

	req.session.user = findUser;

	return res.status(200).send(findUser);
});

app.get("/api/auth/status", (req, res) => {
	req.sessionStore.get(req.sessionID, (err, session) => {
		console.log("Store", session);
	});
	return req.session.user
		? res.status(200).send(req.session.user)
		: res.status(401).send({ message: "Unauthorized" });
});

app.post("/api/cart", (req, res) => {
	if (!req.session.user) {
		return res.status(401).send({ message: "Unauthorized" });
	}

	if (req.session.cart) {
		req.session.cart.push(req.body);
	} else {
		req.session.cart = [req.body];
	}

	return res.status(201).send(req.body);
});

app.get("/api/cart", (req, res) => {
	if (!req.session.user) {
		return res.status(401).send({ message: "Unauthorized" });
	}

	return res.status(200).send(req.session.cart ?? []);
});

app.listen(3000, () => console.log("Server running on 3000"));
