const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('imagePreview');
const imageSize = document.getElementById('imageSize');

imageInput.addEventListener('change', function() {
	const file = this.files[0];
	const reader = new FileReader();

	reader.addEventListener('load', function() {
		imagePreview.src = reader.result;
		const img = new Image();
		img.addEventListener('load', function() {
			const width = this.width;
			const height = this.height;
			imageSize.textContent = `Width: ${width}px, Height: ${height}px`;
		});
		img.src = reader.result;
	});

	reader.readAsDataURL(file);
});
