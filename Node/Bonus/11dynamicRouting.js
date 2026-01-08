const http = require("node:http");
const url = require("node:url");

const server = http.createServer((req, res) => {
	const { pathname } = url.parse(req.url);

	if (pathname.startsWith("/user/")) {
		const userId = pathname.split("/")[2];
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/plain");
		res.end(`User Id: ${userId}`);
	} else {
		res.statusCode = 404;
		res.setHeader("Content-Type", "text/plain");
		res.end("Page not found");
	}
});

server.listen(3000, () => console.log("Server running on port 3000"));
