import cookieParser from "cookie-parser";
import express from "express";
import session from "express-session";
import routes from "./12routes/index.js";

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

app.listen(3000, () => console.log("Server running on 3000"));
