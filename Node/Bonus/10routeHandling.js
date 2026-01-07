const http = require("node:http");
const url = require("node:url");

// Route handler
const routes = {
	"/": (req, res) => {
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/plain");
		res.end("Welcome to home page");
	},
	"/about": (req, res) => {
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/plain");
		res.end("Welcome to about page");
	},
	"/notfound": (req, res) => {
		res.statusCode = 404;
		res.setHeader("Content-Type", "text/plain");
		res.end("Page not found");
	},
};

const server = http.createServer((req, res) => {
	const { pathname } = url.parse(req.url);

	if (routes[pathname]) {
		routes[pathname](req, res);
	} else {
		routes["/notfound"](req, res);
	}
});

server.listen(3000, () => console.log("Server running on port 3000"));
