const http = require("node:http");

const server = http.createServer((req, res) => {
	if (req.url === "/" && req.method === "GET") {
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/plain");
		res.end("Welcome to home page");
	} else {
		res.statusCode = 404;
		res.setHeader("Content-Type", "text/plain");
		res.end("Page not found");
	}
});

server.listen(3000, () => console.log("Server running on port 3000"));
