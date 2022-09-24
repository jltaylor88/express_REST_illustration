import { addPlayerErrorStringCreator, noPlayerMessage } from "../utils.js";
import { v4 as uuidv4 } from "uuid";
// Setup up a dummy "database"
let players = [];

// Get all players controller
export const getPlayers = (_req, res) => {
	res.send(players);
};

// Get a single player controller
export const getPlayer = (req, res) => {
	const { id } = req.params;

	const player = players.find(player => player.id === id);
	const response = !player ? noPlayerMessage(id) : player;

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

// Update a player controller
export const updatePlayer = (req, res) => {
	const { id } = req.params;

	const player = players.find(p => p.id === id);
	if (!player) res.send(noPlayerMessage(id));

	const { firstName, lastName, team, position } = req.body;

	const idx = players.findIndex(p => p.id === id);
	players[idx] = {
		id,
		firstName: firstName || player.firstName,
		lastName: lastName || player.lastName,
		team: team || player.team,
		position: position || player.position,
	};

	res.send(`Successfully updated the player with ID: ${id}`);
};

