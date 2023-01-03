let gridColumn;
let gridRow;

var squaresButton = document.getElementById("squareno");
    squaresButton.addEventListener('click', buttonFunc)
 
function buttonFunc() {
    gridColumn = prompt("How big would you like the grid?", );
    gridRow = gridColumn;

for (let i=0; i<(gridColumn); i++) {
    var gridBase = document.createElement('div');
    gridBase.setAttribute("id", "gridBlocks")
    
    var newContent = document.createTextNode((i+1));
    gridBase.appendChild(newContent);
    grid.appendChild(gridBase);
}

let gridBlocks = document.querySelectorAll('#gridBlocks');

for (let i = 0; i < gridBlocks.length; i++) {
    gridBlocks[i].addEventListener('mouseenter', func1, false);
}}

var colours = ['red', 'orange', 'yellow', 'lightgreen', 'lightblue', 'purple', 'lightpink'];
var randomColour = colours[Math.floor(Math.random() * colours.length)];

function func1() {
    this.style.backgroundColor = randomColour;
}

function func2() {
    this.style.backgroundColor = "white";
}


const allocate = document.getElementById('grid');
allocate.style.display = "grid";
allocate.style.gridTemplateColumns = `repeat(${gridColumn}, 1fr)`;
allocate.style.gridTemplateRows = `repeat(${gridRow}, 1fr)`;