import chooseOption from './chooseOption.js';
import getOptions from './getOptions.js';

const configButtons = document.querySelectorAll('.config [data-config-btn]');
const startGameButton = document.querySelector('.config [data-start-btn]');

configButtons.forEach(btn => {
	btn.addEventListener('click', chooseOption);
});

startGameButton.addEventListener('click', getOptions);
