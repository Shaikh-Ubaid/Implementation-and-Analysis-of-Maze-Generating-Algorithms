const fs = require('fs');

// json data
// var jsonData = '{"persons":[{"name":"John","city":"New York"},{"name":"Phil","city":"Ohio"}]}';

// parse json
// var jsonObj = JSON.parse(jsonData);
// console.log(jsonObj);

// stringify JSON Object

var w;
var size;
var rows;
var cols;
var grid=[];
var Mazes=[];
// var v;
// var u;


size = 400;
w = 20;
function setup() {
    rows = Math.floor(size / w);
    cols = Math.floor(size / w);
    grid=[];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            var cell = new Cell(r, c);
            grid.push(cell);
        }
    }
    RecursiveBacktracking(grid[0], grid[0]);
    console.log("Recursive Backtracking Algorithm completed");        
    var grid_copy=grid.slice();
    Mazes.push(grid_copy);
}


function Index(i, j) {
    if (i < 0 || j < 0 || i >= rows || j >= cols)
        return -1;
    return i * cols + j;
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function RecursiveBacktracking(cell, parent) // implemented recursively without explicit stack
{
    // visit cell
    cell.markVisited();
    parent.connect(cell);
    // collect neighbours in random order
    var neighbours = cell.checkNeighbours();
    shuffleArray(neighbours);

    // for neighbours of i
    for (var i = 0; i < neighbours.length; i++) {
        // if neighbour is not visited
        if (!neighbours[i].visited) {
            // DFS(neighbour)
            RecursiveBacktracking(neighbours[i], cell);
        }
    }
}

function Cell(i, j) {
    this.i = i;
    this.j = j;
    this.index = Index(i, j);
    this.walls = [true, true, true, true];
    this.visited = false;
    this.parent = -1;
    this.checkNeighbours = function () {

        var neighbours = [];
        var top = grid[Index(i - 1, j)];
        var right = grid[Index(i, j + 1)];
        var bottom = grid[Index(i + 1, j)];
        var left = grid[Index(i, j - 1)];
        if (top && !top.visited)
            neighbours.push(top);
        if (right && !right.visited)
            neighbours.push(right);
        if (bottom && !bottom.visited)
            neighbours.push(bottom);
        if (left && !left.visited)
            neighbours.push(left);
        return neighbours;
    }

    this.markVisited = function () {
        this.visited = true;
    }
    this.connect = function (u) {
        var value = this.index - u.index;
        if (value == 1) {
            this.walls[3] = false;
            u.walls[1] = false;
        }
        if (value == -1) {
            u.walls[3] = false;
            this.walls[1] = false;
        }
        if (value == cols) {
            this.walls[0] = false;
            u.walls[2] = false;
        }
        if (value == -cols) {
            u.walls[0] = false;
            this.walls[2] = false;
        }
    }
}


for(var i=0;i<100;i++)
{
    setup();
}


// console.log(Mazes);

var jsonContent = JSON.stringify(Mazes);
// console.log(jsonContent);

fs.writeFile("RecursiveBacktracking.json", jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
    console.log("JSON file has been saved.");
});