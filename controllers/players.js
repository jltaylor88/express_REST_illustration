// Setup up a dummy "database"
const players = [];

export const getPlayers = (_req, res) => {
	res.send(players);
};

