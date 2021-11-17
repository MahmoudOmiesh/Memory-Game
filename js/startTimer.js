export default function startTimer() {
	const timeEl = document.querySelector('[data-time]');
	let start = new Date();
	let minutes = 0;
	let seconds = 0;
	setInterval(function () {
		let secondsSinceStart = Math.floor((Date.now() - start) / 1000);
		if (secondsSinceStart >= 60) {
			secondsSinceStart = 0;
			start = new Date();
			minutes++;
		}
		seconds = secondsSinceStart;
		timeEl.textContent = `${minutes}:${seconds}`;
	}, 1000);
}
