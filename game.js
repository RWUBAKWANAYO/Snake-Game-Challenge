import {
	SNAKE_SPEED,
	update as updateSnake,
	draw as drawSnake,
	getSnakeHead,
	snakeIntersection,
} from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';
import { outsideGrid } from './grid.js';

let lastRenderTime = 0;
let gameOver = false;

const gameBoard = document.getElementById('game-board');
const main = (currentTime) => {
	if (gameOver) {
		if (confirm('You lost. press ok to restart!')) window.location('/');
		return;
	}

	window.requestAnimationFrame(main);
	const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
	if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

	console.log(secondsSinceLastRender, 'render');
	lastRenderTime = currentTime;

	update();
	draw();
};

window.requestAnimationFrame(main);

const update = () => {
	updateSnake();
	updateFood();
	checkDeath();
};

const draw = () => {
	gameBoard.innerHTML = '';
	drawSnake(gameBoard);
	drawFood(gameBoard);
};

const checkDeath = () => {
	gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
};
