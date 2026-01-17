import { MongoClient } from "mongodb";

let db;

export const connectToDb = async () => {
	try {
		const client = await MongoClient.connect(
			"mongodb://localhost:27017/bookstore",
			{ serverSelectionTimeoutMS: 1000 },
		);

		db = client.db();
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
