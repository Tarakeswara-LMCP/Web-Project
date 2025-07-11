const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
  const sizeSelect = box.querySelector('.size');
  const colorSelect = box.querySelector('.color');
  const selectedDisplay = box.querySelector('.selected-options');
  const addToCartBtn = box.querySelector('.add-to-cart');

  sizeSelect.addEventListener('change', () => {
    updateBoxStyle(box);
    updateButtonText();
    selectedDisplay.textContent = `Selected: Size - ${sizeSelect.value}, Color - ${colorSelect.value}`;
  });

  colorSelect.addEventListener('change', () => {
    updateBoxStyle(box);
    updateButtonText();
    selectedDisplay.textContent = `Selected: Size - ${sizeSelect.value}, Color - ${colorSelect.value}`;
  });

  function updateBoxStyle(box) {
    const size = sizeSelect.value;
    const color = colorSelect.value;
    let height;
    switch (size) {
      case 'S': height = '200px'; break;
      case 'M': height = '300px'; break;
      case 'L': height = '400px'; break;
    }
    box.style.height = height;
    box.style.backgroundColor = color;
  }

  function updateButtonText() {
    addToCartBtn.textContent = `Add to Cart (Size: ${sizeSelect.value}, Color: ${colorSelect.value})`;
  }

  // Initialize with default values
  updateBoxStyle(box);
  updateButtonText();
});