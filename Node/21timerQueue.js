// Callbacks in microtask queues are executed in between executions of callbacks
// in the timer queue

setTimeout(() => console.log("This is setTimeout 1"), 0);
setTimeout(() => {
	console.log("This is setTimeout 2");
	Promise.resolve().then(() => {
		console.log("This is the nested Promise.resolve inside setTimeout 2");
	});
	process.nextTick(() => {
		console.log("This is the nested process.nextTick inside setTimeout 2");
	});
}, 0);
setTimeout(() => console.log("This is setTimeout 3"), 0);

process.nextTick(() => console.log("This is process.nextTick 1"));
process.nextTick(() => {
	console.log("This is process.nextTick 2");
	process.nextTick(() => {
		console.log("This is the nested process.nextTick 2.1");
	});
});

process.nextTick(() => console.log("This is process.nextTick 3"));

Promise.resolve().then(() => console.log("This is Promise.resolve 1"));
Promise.resolve().then(() => {
	console.log("This is Promise.resolve 2");
	process.nextTick(() => {
		console.log("This is the nested process.nextTick inside Promise.resolve 2");
	});
});

Promise.resolve().then(() => console.log("This is Promise.resolve 3"));
