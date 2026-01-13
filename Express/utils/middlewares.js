import { mockUsers } from "./constants.js";

export const resolveIndexUserById = (req, res, next) => {
	const parsedId = parseInt(req.params.id);

	if (isNaN(parsedId)) {
		return res.status(400).send({ message: "Bad request. Invalid ID" });
	}

	const userIndex = mockUsers.findIndex((user) => user.id === parsedId);

	if (userIndex === -1) {
		return res.status(404).send({ message: "User not found" });
	}
	req.parsedId = parsedId;
	req.userIndex = userIndex;
	next();
};
