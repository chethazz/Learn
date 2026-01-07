const fs = require("node:fs");

setTimeout(() => console.log("This is setTimeout 1"), 0);

fs.readFile(__filename, () => {
	console.log("This is readFile 1");
});

// If the delay in timeout is 0, but in C it is always max(1, given_delay),
// the lowest delay possible is 1ms. So if the event loop checks the timer queue
// before 1ms mark, it sees the queue is empty. So it proceeds to IO queue to execute
// the callbacks there. So the order is uncertain
