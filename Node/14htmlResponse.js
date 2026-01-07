const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/html");
	// const html = fs.readFileSync(__dirname + "/12htmlResponse.html", "utf-8");
	// res.end(html);

	// Better performance
	fs.createReadStream(__dirname + "/12htmlResponse.html", "utf-8").pipe(res);
});

server.listen(3000, () => {
	console.log("Server running on port 3000");
});
