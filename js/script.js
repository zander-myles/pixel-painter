const grid = document.querySelector(".grid");

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
        grid.appendChild(pixel);
    }
}

createGrid(24);