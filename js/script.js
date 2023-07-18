const grid = document.querySelector(".grid");
const newGridButton = document.querySelector(".new-grid");
const gridSizeInput = document.querySelector(".grid-size-input");
const sizeLabel = document.querySelector(".size-label");

function createGrid(numOnSide) {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
        pixel.remove();
    });
    let gridWidth = grid.scrollWidth;
    let dimension = gridWidth / numOnSide - 2;
    let total = numOnSide * numOnSide;
    for (let i=0; i<total; i++) {
        const pixel = document.createElement("div");
        pixel.className = "pixel";
        pixel.style.width = `${dimension}px`;
        pixel.style.height = `${dimension}px`;
        pixel.addEventListener("click", () => {
            if (!pixel.style.backgroundColor) {
                pixel.style.backgroundColor = "#b4d7ff";
            } else {
                pixel.style.backgroundColor = "";
            }

        })
        grid.appendChild(pixel);
    }
}

function colorPixel(color) {

}

gridSizeInput.addEventListener("blur", () => {
    let numOnSide = gridSizeInput.value;
    sizeLabel.textContent = `x${numOnSide}`;
})

newGridButton.addEventListener("click", () => {
    let numOnSide = gridSizeInput.value;
    createGrid(numOnSide);
})

createGrid(16);