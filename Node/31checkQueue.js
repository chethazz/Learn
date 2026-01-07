setImmediate(() => console.log("This is setImmediate 1"));
setImmediate(() => {
	console.log("This is setImmediate 2");
	process.nextTick(() => console.log("This is process.nextTick 1"));
	Promise.resolve().then(() => console.log("This is Promise.resolve 1"));
});
setImmediate(() => console.log("This is setImmediate 3"));

// Microtask callbacks are executed between macrotask callbacks (timers, I/O, check, close),
// but not between microtask callbacks themselves.
