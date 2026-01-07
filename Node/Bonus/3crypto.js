const crypto = require("node:crypto");

const hash = crypto.createHash("sha256");
hash.update("hello world");
console.log(hash.digest("hex"));
