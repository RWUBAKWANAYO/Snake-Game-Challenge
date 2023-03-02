import { expandSnake, onSnake } from './snake.js';

let food = { x: 11, y: 1 };
const EXPANSION_RATE = 1;

export const update = () => {
	if (onSnake(food)) {
		expandSnake(EXPANSION_RATE);
		food = { x: 20, y: 10 };
	}
};
export const draw = (gameBoard) => {
	const foodElement = document.createElement('div');
	foodElement.style.gridRowStart = food.y;
	foodElement.style.gridColumnStart = food.x;
	foodElement.classList.add('food');
	gameBoard.appendChild(foodElement);
};
