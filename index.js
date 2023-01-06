window.onload = function() {

//set variables for the row and column of the grid//
let gridColumn;
let gridRow;

//when user clicks the button they enter how many squares for the row & column//
var squaresButton = document.getElementById("squareno");
    squaresButton.addEventListener('click', buttonFunc)
 
function buttonFunc() {
    gridColumn = prompt("How many columns do you want?", );
    if (gridColumn > 100) {
        gridColumn = prompt("Please try again, that number is too large", );
    }
    gridRow = gridColumn;

for (let i = 0; i < gridRow; i++) {
    for (let j = 0; j < gridColumn; j++) {
        var gridBase = document.createElement('div');
        gridBase.setAttribute("id", "gridBlocks");
        grid.appendChild(gridBase);
    }
}

let gridBlocks = document.querySelectorAll('#gridBlocks');


for (let i = 0; i < gridBlocks.length; i++) {
    gridBlocks[i].addEventListener('mouseenter', func1, false);
}

var colours = ['red', 'orange', 'yellow', 'lightgreen', 'lightblue', 'purple', 'lightpink'];
var randomColour = colours[Math.floor(Math.random() * colours.length)];

function func1() {
    this.style.backgroundColor = randomColour;
}

function func2() {
    this.style.backgroundColor = "white";
}

console.log(`gridColumn: ${gridColumn}`);
console.log(`gridRow: ${gridRow}`);

//the number entered into the prompt is the number of rows and columns//
const allocate = document.getElementById('grid');
if (allocate) {
  console.log('Element with ID "grid" found');
} else {
  console.log('Element with ID "grid" not found');
}
allocate.style.display = "grid";
allocate.style.gridTemplateColumns = `repeat(${gridRow}, 1fr)`;
allocate.style.gridTemplateRows = `repeat(${gridColumn}, 1fr)`;


}}