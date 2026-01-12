const express = require("express");

const app = express();

app.get("/data", async (req, res) => {
	try {
		const data = await fetchFromDB();
		res.json(data);
	} catch (error) {
		res.status(500).send("Error fetching data");
	}

	async function fetchFromDB() {
		// Logic
		return { id: 1, name: "Product A" };
	}
});

app.listen(3000, () => console.log("Server is running on 3000"));
