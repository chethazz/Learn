import express from "express";
import { ObjectId } from "mongodb";
import { connectToDb, getDb } from "./db.js";

const app = express();
app.use(express.json());

app.get("/books", (req, res) => {
	const db = getDb();
	const books = [];
	// find() returns a cursor object that points to a set of documents
	// outlined by our query(Points to the whole collection)
	// cursor has toArray() and forEach() methods
	db.collection("books")
		.find()
		.sort({ author: 1 })
		.forEach((book) => books.push(book))
		.then(() => {
			res.json(books);
		})
		.catch(() => {
			res.status(500).json({ error: "Internal server error" });
		});
});

app.get("/books/:id", (req, res) => {
	if (ObjectId.isValid(req.params.id)) {
		const db = getDb();
		db.collection("books")
			.findOne({ _id: new ObjectId(req.params.id) })
			.then((book) => {
				if (book) {
					res.json(book);
				} else {
					res.status(404).json({ message: "Book not found" });
				}
			})
			.catch(() => {
				res.status(500).json({ error: "Internal server error" });
			});
	} else {
		res.status(400).json({ message: "Enter a valid id" });
	}
});

app.post("/books", (req, res) => {
	const db = getDb();

	db.collection("books")
		.insertOne(req.body)
		.then((result) => {
			res.status(201).json(result);
		})
		.catch((err) => {
			res.status(500).json({ error: "Internal server error" });
		});
});

app.delete("/books/:id", (req, res) => {
	if (ObjectId.isValid(req.params.id)) {
		const db = getDb();

		db.collection("books")
			.deleteOne({ _id: new ObjectId(req.params.id) })
			.then((book) => {
				if (book) {
					res.json(book);
				} else {
					res.status(404).json({ message: "Book not found" });
				}
			})
			.catch(() => {
				res.status(500).json({ error: "Internal server error" });
			});
	} else {
		res.status(400).json({ message: "Enter a valid id" });
	}
});

const startApp = async () => {
	try {
		await connectToDb();

		app.listen(3000, () => console.log("Server running on port 3000"));
	} catch (error) {
		console.error("Failed to connect to DB", error);
	}
};

startApp();
