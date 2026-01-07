const https = require("node:https");

// Altho both crypto.pbkdf2 and https.request are async, the
// latter doesn't use the thread pool;
// and it isn't affected by the no. of CPU cores either.

// It's a network I/O operation and not a CPU bound operation

// libuv delegates work to OS kernel and whenever possible, it'll poll the kernel
// and see if the request has completed

const MAX_CALLS = 12;

const start = Date.now();

for (let i = 0; i < MAX_CALLS; i++) {
	https
		.request("https://www.google.com", (res) => {
			res.on("data", () => {});
			res.on("end", () => {
				console.log(`Request: ${i + 1}`, Date.now() - start);
			});
		})
		.end();
}
