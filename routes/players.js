import express from "express";
import {
	addPlayer,
	deletePlayer,
	getPlayer,
	getPlayers,
	updatePlayer,
} from "../controllers/players.js";

const router = express.Router();

router.get("/", getPlayers);
router.get("/:id", getPlayer);
router.post("/", addPlayer);
router.patch("/:id", updatePlayer);
router.delete("/:id", deletePlayer);

export default router;

