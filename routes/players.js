import express from "express";
import { getPlayer, getPlayers } from "../controllers/players.js";

const router = express.Router();

router.get("/", getPlayers);
router.get("/:id", getPlayer);
export default router;

