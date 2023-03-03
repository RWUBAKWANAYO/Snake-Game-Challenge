import {
	SNAKE_SPEED,
	update as updateSnake,
	draw as drawSnake,
	getSnakeHead,
	snakeIntersection,
} from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';
import { outsideGrid } from './grid.js';
import { getCurrentScore, getHighScore, setStorageScore } from './score.js';

let lastRenderTime = 0;
let gameOver = false;

const gameBoard = document.getElementById('game-board');
const main = (currentTime) => {
	if (gameOver) {
		setStorageScore();
		alert('You lost. press ok to restart!');
		return (window.location = '/');
	}

	window.requestAnimationFrame(main);
	const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
	if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
	lastRenderTime = currentTime;

	update();
	draw();
	getCurrentScore();
	getHighScore();
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
