const EventEmitter = require("node:events");

const emitter = new EventEmitter();

// Registering an event listener
emitter.on("test1", () => {
	console.log("An event has occurred");
});

emitter.on("error", (err) => {
	console.error("Error event:", err.message);
});

try {
	emitter.emit("test1");
	emitter.removeListener("test1");
	// Error because it has already been removed
	emitter.emit("test1");
} catch (error) {
	emitter.emit("error", error);
}
