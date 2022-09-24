import { addPlayerErrorStringCreator } from "../utils.js";
import { v4 as uuidv4 } from "uuid";
// Setup up a dummy "database"
const players = [];

// Get all players controller
export const getPlayers = (_req, res) => {
	res.send(players);
};

// Get a single player controller
export const getPlayer = (req, res) => {
	const { id } = req.params;

	const player = players.find(player => player.id === id);
	const response = !player
		? `No player with an ID of ${id} could be found in the database.`
		: player;

	res.send(response);
};

// Add a player controller
export const addPlayer = (req, res) => {
	const { firstName, lastName, team, position } = req.body;

	if (!firstName) res.send(addPlayerErrorStringCreator("firstName"));

	if (!lastName) res.send(addPlayerErrorStringCreator("lastName"));

	if (!team) res.send(addPlayerErrorStringCreator("team"));

	if (!position) res.send(addPlayerErrorStringCreator("position"));

	const id = uuidv4();

	players.push({ id, firstName, lastName, team, position });

	res.send(`Player was successfully created and was assigned the ID: ${id}`);
};

