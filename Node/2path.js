const path = require("node:path");

console.log(path.join("folder1", "folder2", "index.html"));
console.log(path.join("/folder1", "folder2", "index.html"));

// Also normalizes
console.log(path.join("folder1", "//folder2", "index.html"));
console.log(path.join("folder1", "folder2", "../index.html"));
console.log(path.join(__dirname, "data.json"));

// Resolves to absolute path
console.log(path.resolve("folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "folder2", "index.html"));

// Also normalizes and if it sees / later, it considers that as the root
console.log(path.resolve("/folder1", "//folder2", "index.html"));
console.log(path.resolve("/folder1", "//folder2", "../index.html"));
console.log(path.resolve(__dirname, "data.json"));
