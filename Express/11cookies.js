import cookieParser from "cookie-parser";
import express from "express";
import routes from "./11routes/index.js";

const app = express();

app.use(express.json());
app.use(cookieParser("helloworld"));
app.use(routes);

app.get("/", (req, res) => {
	res.cookie("hello", "world", {
		maxAge: 60 * 1000 * 60 * 2,
		signed: true,
	});
	res.send("Hello world!");
});

app.listen(3000, () => console.log("Server running on 3000"));
