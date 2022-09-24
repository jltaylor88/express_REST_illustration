import express from "express";
import { getPlayers } from "../controllers/players.js";

const router = express.Router();

router.get("/", getPlayers);

export default router;

