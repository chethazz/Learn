import "dotenv/config";
import { MongoClient } from "mongodb";

let db;

export const connectToDb = async () => {
	try {
		const client = await MongoClient.connect(process.env.MONGO_URI, {
			serverSelectionTimeoutMS: 1000,
		});

		db = client.db("bookstore");
		await db.admin().ping();

		console.log("Connected to MongoDB");
	} catch (error) {
		throw error;
	}
};

export const getDb = () => {
	if (!db) {
		throw new Error("Database not initialized. Call connectToDb first");
	}

	return db;
};
