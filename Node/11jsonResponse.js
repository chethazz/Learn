const http = require("node:http");

const superHero = {
    firstName: "Bruce",
    lastName: "Wayne"
};

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(superHero));
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});