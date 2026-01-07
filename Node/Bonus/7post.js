const http = require("node:http");

const server = http.createServer((req, res) => {
	if (req.url === "/submit" && req.method === "POST") {
		let body = "";

		req.on("data", (chunk) => {
			body += chunk.toString();
		});

		req.on("end", () => {
			res.statusCode = 200;
			res.setHeader("Content-Type", "application/json");
			res.end(JSON.stringify({ message: "Data received", data: body }));
		});
	} else {
		res.statusCode = 404;
		res.setHeader("Content-Type", "text/plain");
		res.end("Route not found");
	}
});

server.listen(3000, () => console.log("Server running on port 3000"));
