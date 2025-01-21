const modelViewer = document.querySelector('model-viewer');
const heightSlider = document.getElementById('height-slider');

heightSlider.addEventListener('input', () => {
    const height = heightSlider.value;
    modelViewer.style.transform = `translateY(-${height}m)`; // Устанавливаем высоту
});
