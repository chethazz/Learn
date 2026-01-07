const url = require("node:url");

const myURL = new URL("https://localhost:3000/path/name?query=hello#hash");
console.log(myURL.host);
console.log(myURL.pathname);
console.log(myURL.searchParams.get("query"));
