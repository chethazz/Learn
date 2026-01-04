const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const server = http.createServer((req, res) => {
	const name = "Chethas";
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/html");
	let html = fs.readFileSync(__dirname + "/13htmlTemplate.html", "utf-8");
	html = html.replace("{{name}}", name);
	res.end(html);
});

server.listen(3000, () => {
	console.log("Server running on port 3000");
});
