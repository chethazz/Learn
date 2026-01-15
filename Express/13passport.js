import cookieParser from "cookie-parser";
import express from "express";
import session from "express-session";
import passport from "passport";
import routes from "./12routes/index.js";
import "./13strategies/local-strategy.js";

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
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

app.get("/", (req, res) => {
	console.log(req.session);
	console.log(req.sessionID);
	req.session.visited = true;
	res.send("Hello world!");
});

app.post("/api/auth", passport.authenticate("local"), (req, res) => {
	res.sendStatus(200);
});

app.get("/api/auth/status", (req, res) => {
	console.log("Inside /auth/status");
	console.log(req.user);
	console.log(req.session);

	return req.user ? res.send(req.user) : res.sendStatus(401);
});

app.post("/api/auth/logout", (req, res) => {
	if (!req.user) {
		return res.sendStatus(401);
	}

	req.logout((error) => {
		if (error) {
			return res.sendStatus(400);
		}
		return res.sendStatus(200);
	});
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
