import initGame from './initGame.js';

export default function getOptions() {
	const options = [];
	const activeButtons = document.querySelectorAll(
		'.config [data-config-btn].active'
	);

	activeButtons.forEach(btn => {
		options.push(btn.innerText);
	});

	initGame(options);
}
