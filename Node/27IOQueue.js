const fs = require("node:fs");

fs.readFile(__filename, () => {
	console.log("This is readFile 1");
});

process.nextTick(() => console.log("This is process.nextTick 1"));
Promise.resolve().then(() => console.log("This is Promise.resolve 1"));
setTimeout(() => console.log("This is setTimeout 1"), 0);

// To ensure 1ms is ellapsed when control enters the timer queue
for (let i = 0; i < 2000000000; i++) {}
