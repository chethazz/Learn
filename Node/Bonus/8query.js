const http = require("node:http");
const url = require("node:url");

const server = http.createServer((req, res) => {
	if (req.url.startsWith("/search") && req.method === "GET") {
		const queryObj = url.parse(req.url, true).query;

		res.statusCode = 200;
		res.setHeader("Content-Type", "application/json");
		res.end(JSON.stringify({ message: "Query received", queryObj }));
	} else {
		res.statusCode = 404;
		res.setHeader("Content-Type", "text/plain");
		res.end("Page not found");
	}
});

server.listen(3000, () => console.log("Server running on port 3000"));
