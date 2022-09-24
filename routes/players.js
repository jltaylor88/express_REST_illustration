import express from "express";
import { addPlayer, getPlayer, getPlayers } from "../controllers/players.js";

const router = express.Router();

router.get("/", getPlayers);
router.get("/:id", getPlayer);
router.post("/", addPlayer);

export default router;

