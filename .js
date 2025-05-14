const container = document.getElementById('gallery');
let isDragging = false;
let startX, scrollLeft;
mainContent.style.filter = `grayscale(${1 - grayscaleAmount})`; // Reverse direction

container.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
  container.style.cursor = 'grabbing';
});

container.addEventListener('mouseleave', () => {
  isDragging = false;
  container.style.cursor = 'grab';
});

container.addEventListener('mouseup', () => {
  isDragging = false;
  container.style.cursor = 'grab';
});

container.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 1.5; // Scroll speed
  container.scrollLeft = scrollLeft - walk;
});

const images = document.querySelectorAll('.image-stack img');

images.forEach((img) => {
  img.addEventListener('click', () => {
    const isZoomed = img.classList.contains('zoomed');

    // Remove zoom from all images
    images.forEach((i) => i.classList.remove('zoomed'));

    // If not already zoomed, zoom this one
    if (!isZoomed) {
      img.classList.add('zoomed');
    }
  });
});

