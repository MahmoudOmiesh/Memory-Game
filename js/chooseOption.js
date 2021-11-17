export default function chooseOption({ currentTarget }) {
	const buttonCategory = currentTarget.dataset.category;
	const activeButton = document.querySelector(
		`[data-category="${buttonCategory}"].active`
	);

	activeButton.classList.remove('active');
	currentTarget.classList.add('active');
}
