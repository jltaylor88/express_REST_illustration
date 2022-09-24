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

