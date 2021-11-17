import initGridOptions from './initGridOptions.js';
import getRandomGrid from './getGridObject.js';

export default function generateGrid(size, theme, number) {
	const gridItemsNumber = size === '4x4' ? 16 : 36;
	const gridClass = size === '4x4' ? 'four' : 'six';
	const gridDiv = document.querySelector('.grid');
	gridDiv.innerHTML = '';
	gridDiv.classList.add(gridClass);

	for (let i = 0; i < gridItemsNumber; i++) {
		const gridItem = document.createElement('div');
		gridItem.classList.add('grid-item');
		gridDiv.appendChild(gridItem);
	}

	const grid = getRandomGrid(gridDiv, theme);
	initGridOptions(gridDiv, grid, theme);
}
