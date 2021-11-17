import generateGrid from './generateGrid.js';
import startTimer from './startTimer.js';

export default function initGame([theme, playerNumber, gridSize]) {
	document.body.classList.replace('config-state', 'game-state');
	generateGrid(gridSize, theme, playerNumber);
	startTimer();
}
