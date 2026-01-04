const http = require("node:http");

const server = http.createServer((req, res) => {
	// req.method GET POST PUT DELETE
	if (req.url === "/") {
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/plain");
		res.end("Home page");
	} else if (req.url === "/about") {
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/plain");
		res.end("About page");
	} else if (req.url === "/api") {
		res.statusCode = 200;
		res.setHeader("Content-Type", "application/json");
		res.end(
			JSON.stringify({
				firstName: "Bruce",
				lastName: "Wayne",
			}),
		);
	} else {
		res.statusCode = 404;
		res.end("Page not found!");
	}
});

server.listen(3000, () => {
	console.log("Server running on port 3000");
});
