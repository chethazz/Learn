const http = require("node:http");
// HTTP module extends from EventEmitter and the callback in createServer
// is a request listener

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/plain");
	res.end("Hello world!");
});

server.listen(3000, () => {
	console.log("Server running on port 3000");
});
