export default function getRandomGrid(gridDiv, theme) {
	const icons = [
		'fas fa-dragon',
		'fas fa-dog',
		'fas fa-ankh',
		'fas fa-biohazard',
		'fas fa-golf-ball',
		'fas fa-circle',
		'fas fa-volleyball-ball',
		'fas fa-bowling-ball',
		'fas fa-cat',
		'fas fa-basketball-ball',
		'fas fa-cogs',
		'fas fa-football-ball',
		'fas fa-burn',
		'fas fa-egg',
		'fas fa-anchor',
		'fas fa-brain',
		'fas fa-cog',
		'fas fa-binoculars',
	];
	const exceptions = [];
	const gridMap = [];
	const gridItems = [...gridDiv.querySelectorAll('.grid-item')];

	for (let i = 0; i < gridItems.length / 2; i++) {
		let randomIdxOne = getRandomIdx(gridItems.length);
		let randomIdxTwo = getRandomIdx(gridItems.length);

		while (
			exceptions.includes(randomIdxOne) ||
			exceptions.includes(randomIdxTwo) ||
			randomIdxOne === randomIdxTwo
		) {
			randomIdxOne = getRandomIdx(gridItems.length);
			randomIdxTwo = getRandomIdx(gridItems.length);
		}

		exceptions.push(randomIdxOne, randomIdxTwo);

		gridMap.push(
			{
				element: gridItems[randomIdxOne],
				content: theme === 'Numbers' ? i : icons[i],
			},
			{
				element: gridItems[randomIdxTwo],
				content: theme === 'Numbers' ? i : icons[i],
			}
		);
	}

	return gridMap;
}

function getRandomIdx(length) {
	return Math.floor(Math.random() * length);
}
