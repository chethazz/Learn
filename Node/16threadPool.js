const crypto = require("node:crypto");

const MAX_CALLS = 4;

const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
	crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
	console.log("Hash: ", Date.now() - start);
}

// Parallel execution. These run on separate threads from libuv thread pool
const startAsync = Date.now();

for (let i = 0; i < MAX_CALLS; i++) {
	crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
		console.log(`Hash: ${i + 1}`, Date.now() - startAsync);
	});
}
