import express from "express";
import routes from "./10routes/index.js";

const app = express();

app.use(express.json());
app.use(routes);

app.get("/", (req, res) => {
	res.send("Hello world!");
});

app.listen(3000, () => console.log("Server running on 3000"));
