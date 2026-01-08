const path = require("node:path");

console.log("Join");
// Uses platform specific separator
console.log(1, path.join("folder1", "folder2", "index.html"));
console.log(2, path.join("/folder1", "folder2", "index.html"));

// Also normalizes
console.log(3, path.join("folder1", "//folder2", "index.html"));
console.log(4, path.join("folder1", "folder2", "../index.html"));
console.log(5, path.join(__dirname, "data.json"));

console.log("Resolve");
// Resolves to absolute path
console.log(6, path.resolve("folder1", "folder2", "index.html"));
console.log(7, path.resolve("/folder1", "folder2", "index.html"));

// Also normalizes and if it sees / later, it considers that as the root
console.log(8, path.resolve("/folder1", "//folder2", "index.html"));
console.log(9, path.resolve("/folder1", "//folder2", "../index.html"));
console.log(10, path.resolve(__dirname, "data.json"));
