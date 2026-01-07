const crypto = require("node:crypto");

// By increasing the thread pool size, we're able to improve the total
// time taken to run multiple calls of async method like pbkdf2(Limited
// by the no. of CPU cores available)
process.env.UV_THREADPOOL_SIZE = 8;
const MAX_CALLS = 8;

const startAsync = Date.now();

for (let i = 0; i < MAX_CALLS; i++) {
	crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
		console.log(`Hash: ${i + 1}`, Date.now() - startAsync);
	});
}
