import { Router } from "express";
import { products } from "../utils/constants.js";

const router = Router();

router.get("/api/products", (req, res) => {
	console.log(req.headers.cookie);
	console.log(req.cookies);
	console.log(req.signedCookies.hello);
	if (req.signedCookies.hello && req.signedCookies.hello === "world") {
		return res.status(200).send(products);
	}
	return res
		.status(403)
		.send({ message: "Unauthorized. You need the right cookie" });
});

export default router;
