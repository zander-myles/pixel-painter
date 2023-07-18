const grid = document.querySelector(".grid");
const newGridButton = document.querySelector(".new-grid");
const gridSizeInput = document.querySelector(".grid-size-input");
const sizeLabel = document.querySelector(".size-label");
const easel = document.querySelector(".easel-page");
const easelButton = document.querySelector(".easel");

easelButton.addEventListener("click", () => {
    if (easel.style.translate === "-1000px") {
        easel.style.translate = "none";
    } else {
        easel.style.translate = "-1000px";
    }

})



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

gridSizeInput.addEventListener("blur", () => {
    let numOnSide = gridSizeInput.value;
    sizeLabel.textContent = `x${numOnSide}`;
})

newGridButton.addEventListener("click", () => {
    let numOnSide = gridSizeInput.value;
    createGrid(numOnSide);
})

createGrid(16);