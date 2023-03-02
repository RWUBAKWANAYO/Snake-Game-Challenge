const GRID_SIZE = 21;

export const randomGridPosition = () => {
	return {
		x: Math.floor(Math.random() * GRID_SIZE + 1),
		y: Math.floor(Math.random() * GRID_SIZE + 1),
	};
};

export const outsideGrid = (position) =>
	position.x < 1 || position.y > GRID_SIZE || position.y < 1 || position.y > GRID_SIZE;
