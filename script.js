const container = document.querySelector(".container");
const size = document.querySelector(".size");
const reset = document.querySelector(".reset");
const dark = document.querySelector(".dark");
const display = document.querySelector(".display");
let gridSize = 16;
let opactiyValue = 1;

grid(gridSize)
function grid(gridSize) {
    console.log(gridSize)
    for (let i = 0; i < gridSize*gridSize; i++) {
        const createDiv = document.createElement("div");
        createDiv.classList.add("grid");
        createDiv.style.width = 600/gridSize + "px";
        createDiv.style.height = 600/gridSize + "px";
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
    opactiyValue = 1
}

size.addEventListener("click", () => {
    gridSize = Number(prompt("What would you like the grid size to be by? Default 16 x 16."));
    gridReset();
})
reset.addEventListener("click", gridReset);
dark.addEventListener("click", () => {
    const createDiv = document.querySelectorAll(".grid");
    createDiv.forEach(grid => {
        grid.addEventListener("mouseover", () => {
            grid.style.opacity = opactiyValue*0.05;
            opactiyValue++;
        });
    });
})