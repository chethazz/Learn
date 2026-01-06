const cluster = require("node:cluster");
const http = require("node:http");

if (cluster.isPrimary) {
	console.log(`Primary process ${process.pid} is running`);
	cluster.fork();
	cluster.fork();
} else {
	console.log(`Worker ${process.pid} started`);
	const server = http.createServer((req, res) => {
		if (req.url === "/") {
			res.statusCode = 200;
			res.setHeader("Content-Type", "text/plain");
			res.end("Home page");
		} else if (req.url === "/slow-page") {
			for (let i = 0; i < 6000000000; i++) {}
			res.statusCode = 200;
			res.setHeader("Content-Type", "text/plain");
			res.end("Slow page");
		}
	});

	server.listen(3000, () => console.log("Server is running on port 3000"));
}
