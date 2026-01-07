const http = require("node:http");
const url = require("node:url");

const server = http.createServer((req, res) => {
	if (req.url === "/" && req.method === "GET") {
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/plain");
		res.setHeader("Custom-Header", "Node Server");
		res.end("Welcome to homepage");
	} else {
		res.statusCode = 404;
		res.setHeader("Content-Type", "text/plain");
		res.end("Page not found");
	}
});

server.listen(3000, () => console.log("Server running on port 3000"));
