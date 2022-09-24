export const addPlayerErrorStringCreator = propertyName => {
	return `In order to create a player you must provide a value for the ${propertyName} property`;
};

export const noPlayerMessage = id =>
	`No player with an ID of ${id} could be found in the database.`;

