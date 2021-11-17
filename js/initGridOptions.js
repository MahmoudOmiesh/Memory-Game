import checkForComparison from './checkForCmparison.js';
export default function initGridOptions(gridDiv, gridObj, theme) {
	addClickListeners(gridDiv, gridObj, theme);
}

export const options = [];
let moves = 0;

function addClickListeners(gridDiv, gridObj, theme) {
	const gridItems = gridDiv.querySelectorAll('.grid-item');
	gridItems.forEach(item => {
		item.addEventListener('click', e => chooseOption(e, gridObj, theme));
	});
}

function chooseOption({ currentTarget }, gridObj, theme) {
	const [choosenOption] = gridObj.filter(
		({ element }) => element === currentTarget
	);

	moves++;
	showElement(choosenOption, theme);
	updateMoves();

	options.push(choosenOption);
	checkForComparison();
}

function showElement({ element, content }, theme) {
	element.classList.add('chosen');
	if (theme === 'Icons') {
		element.innerHTML = `<i class="${content}"></i>`;
	} else {
		element.textContent = content;
	}
}

function updateMoves() {
	const movesEl = document.querySelector('[data-moves]');
	movesEl.textContent = moves;
}
