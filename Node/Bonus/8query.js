const http = require("node:http");

const server = http.createServer((req, res) => {
	if (req.url.startsWith("/search") && req.method === "GET") {
		const url = new URL(req.url, `http://${req.headers.host}`);
		const queryObj = Object.fromEntries(url.searchParams);

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
