const container = document.querySelector(".container");
const size = document.querySelector(".size");
const reset = document.querySelector(".reset");
const display = document.querySelector(".display");
let gridSize = 16;


function grid(gridSize) {
    console.log(gridSize)
    for (let i = 0; i < gridSize*gridSize; i++) {
        const createDiv = document.createElement("div");
        createDiv.classList.add("grid");
        createDiv.style.width = 640/gridSize + "px";
        createDiv.style.height = 640/gridSize + "px";
        createDiv.addEventListener("mouseover", () => {
            createDiv.classList.add("active");
        });
        container.appendChild(createDiv);
        console.log(i)
    }
    display.innerHTML = gridSize + "x" + gridSize;
}
function gridReset() {
    const remove = container.querySelectorAll(".grid");
    remove.forEach(grid => {
        container.removeChild(grid);
    });
    grid(gridSize);
}

size.addEventListener("click", () => {
    gridSize = Number(prompt("What would you like the grid size to be by? Default 16 x 16."));
    gridReset();
})
reset.addEventListener("click", gridReset());
