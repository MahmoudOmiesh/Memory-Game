import { options } from './initGridOptions.js';

export default function checkForComparison() {
	if (options.length === 2) {
		if (options[0].content === options[1].content) {
			setTimeout(() => selectPair(), 750);
		} else {
			setTimeout(() => unselectPair(), 750);
		}
	}
}

function selectPair() {
	options[0].element.classList.replace('chosen', 'paired');
	options[1].element.classList.replace('chosen', 'paired');
	options.length = 0;
}

function unselectPair() {
	options[0].element.classList.remove('chosen');
	options[1].element.classList.remove('chosen');
	options[0].element.innerHTML = null;
	options[1].element.innerHTML = null;
	options.length = 0;
}
