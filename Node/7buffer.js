const buffer = new Buffer.from("Regulus");

// Overritde first 4 characters
buffer.write("Code");

// Not enough space in buffer
buffer.write("Venus Deluca");

// Decimal
console.log(buffer.toJSON());

// Hexadecimal.(Buffer contains RAW binary. So it converts to base 16)
console.log(buffer);

// String rep of binary data
console.log(buffer.toString());

// Node internally works with buffer