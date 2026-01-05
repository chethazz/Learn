// IMP: Timer queue isn't exactly a queue, but rather a min heap

setTimeout(() => console.log("This is setTimeout 1"), 1000);
setTimeout(() => console.log("This is setTimeout 2"), 500);
setTimeout(() => console.log("This is setTimeout 3"), 0);
