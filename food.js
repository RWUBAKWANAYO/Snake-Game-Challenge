let food = { x: 11, y: 1 };

export const update = () => {};
export const draw = (gameBoard) => {
	const foodElement = document.createElement('div');
	foodElement.style.gridRowStart = food.y;
	foodElement.style.gridColumnStart = food.x;
	foodElement.classList.add('food');
	gameBoard.appendChild(foodElement);
};
