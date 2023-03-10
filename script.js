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
      const size = file.size;
      const sizeInKB = Math.round(size / 1024);
      imageSize.textContent = `Width: ${width}px, Height: ${height}px, Size: ${sizeInKB}KB`;
    });
    img.src = reader.result;
  });

  reader.readAsDataURL(file);
});
