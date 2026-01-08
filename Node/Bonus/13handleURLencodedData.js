const http = require("node:http");
const queryString = require("node:querystring");

const server = http.createServer((req, res) => {
    if (req.url === "/submit" && req.method === "POST") {
        let data = "";

        req.on("data", (chunk) => {
            data += chunk;
        });

        req.on("end", () => {
            const parsedData = queryString.parse(data);
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ message: "Form data received", parsedData }));
        });
    }
});

server.listen(3000, () => console.log("Server running on port 3000"));
