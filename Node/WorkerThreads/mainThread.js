const http = require("node:http");
const { Worker } = require("node:worker_threads");

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/plain");
		res.end("Home page");
	} else if (req.url === "/slow-page") {
		const worker = new Worker(__dirname + "/workerThread.js");
		worker.on("message", (j) => {
			res.statusCode = 200;
			res.setHeader("Content-Type", "text/plain");
			res.end(`Slow page ${j}`);
		});
	}
});

server.listen(3000, () => console.log("Server is running on port 3000"));
