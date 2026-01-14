import { Router } from "express";
import { checkSchema, matchedData, validationResult } from "express-validator";
import { mockUsers } from "../utils/constants.js";
import { resolveIndexUserById } from "../utils/middlewares.js";
import { createUserSchema } from "../utils/validation.js";

const router = Router();

router.get("/api/users", (req, res) => {
	console.log(req.session);
	console.log(req.sessionID);
	req.sessionStore.get(req.sessionID, (err, sessionData) => {
		if (err) {
			console.log(err);
			throw err;
		}
		console.log(sessionData);
	});
	const result = validationResult(req);
	console.log(result);
	const { filter, value } = req.query;

	if (filter && value) {
		return res.send(mockUsers.filter((user) => user[filter].includes(value)));
	}

	return res.send(mockUsers);
});

router.post("/api/users", checkSchema(createUserSchema), (req, res) => {
	const result = validationResult(req);

	if (!result.isEmpty()) {
		return res.status(400).send({ errors: result.array() });
	}

	const data = matchedData(req);

	const newUser = { id: mockUsers[mockUsers.length - 1].id + 1, ...data };
	mockUsers.push(newUser);
	return res.status(201).send(newUser);
});

router.get("/api/users/:id", resolveIndexUserById, (req, res) => {
	return res.send(mockUsers[req.userIndex]);
});

router.put("/api/users/:id", resolveIndexUserById, (req, res) => {
	mockUsers[req.userIndex] = {
		id: req.parsedId,
		username: req.body.username || mockUsers[req.userIndex].username,
		displayName: req.body.displayName || mockUsers[req.userIndex].displayName,
	};

	return res.status(200).send(mockUsers[req.userIndex]);
});

router.patch("/api/users/:id", resolveIndexUserById, (req, res) => {
	mockUsers[req.userIndex] = { ...mockUsers[req.userIndex], ...req.body };

	return res.status(200).send(mockUsers[req.userIndex]);
});

router.delete("/api/users/:id", resolveIndexUserById, (req, res) => {
	const deletedUser = mockUsers.splice(req.userIndex, 1);

	return res.status(200).send(deletedUser);
});

export default router;
