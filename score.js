import { snakeBody } from './snake.js';

export const getCurrentScore = () => {
	const score = snakeBody.length - 1;
	const currScore = document.getElementById('current-score');
	currScore.innerText = score;
};

export const getHighScore = () => {
	const score = getStorageScore();
	const highScore = document.getElementById('high-score');
	highScore.innerText = score;
};

export const getStorageScore = () => {
	return localStorage.getItem('score') || 0;
};

export const setStorageScore = () => {
	const score = getStorageScore();
	if (score < snakeBody.length - 1) {
		return localStorage.setItem('score', snakeBody.length - 1);
	}
};
