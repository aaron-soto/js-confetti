document.addEventListener('keydown', (e) => {
	if (e.key === 'ArrowRight') {
		frameAdv = true;
	}

	if (e.key === 'f') {
		DEBUG_MODE = !DEBUG_MODE;
	}
});
