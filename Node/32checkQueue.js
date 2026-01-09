setTimeout(() => console.log("This is setTimeout 1"), 0);
setImmediate(() => console.log("This is setImmediate 1"));

// If the delay in timeout is 0, but in C it is always max(1, given_delay),
// the lowest delay possible is 1ms. So if the event loop checks the timer queue
// before 1ms mark, it sees the queue is empty. So it proceeds to check queue to execute
// the callbacks there. So the order is uncertain.
// Add a time consuming for loop to guarantee the order
