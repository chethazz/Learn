import { Router } from "express";
import { products } from "../utils/constants.js";

const router = Router();

router.get("/api/products", (req, res) => {
	res.status(200).send(products);
});

export default router;
