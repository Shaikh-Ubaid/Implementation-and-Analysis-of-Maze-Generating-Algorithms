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
var grid = [];
var W;
var w0 = W;
var unvisitedCells;
var flag = false;
// var v;
// var u;

var Mazes=[];


size = 400;
w = 20;
function setup() {
    rows = Math.floor(size / w);
    cols = Math.floor(size / w);
    grid=[];
    unvisitedCells=[];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            var cell = new Cell(r, c);
            grid.push(cell);
            unvisitedCells.push(cell);
        }
    }
    Wilson();
    console.log("Wilson Algorithm completed");        
    var grid_copy=grid.slice();
    Mazes.push(grid_copy);
}

function Delete(v) {
    for (let i = 0; i < unvisitedCells.length; i++) {
      if (unvisitedCells[i] == v) {
        unvisitedCells.splice(i, 1);
      }
    }
  }

function Index(i, j) {
    if (i < 0 || j < 0 || i >= rows || j >= cols)
        return -1;
    return i * cols + j;
}

function Random(array)
{
    return array[Math.floor(Math.random() * array.length)]
}

function Wilson() {
    var v0 = Random(unvisitedCells);
    v0.markVisited();
    console.log("setup successfull");
    console.log("Coordinates of v are " + v0.i + " " + v0.j);
    while (unvisitedCells.length > 0) {
        W = Random(unvisitedCells);
        // W.focus();
        // console.log("random unvisited w found");
        // console.log("Coordinates of W are " + W.i + " " + W.j);
        w0 = W;
        while (!W.visited) {
            var current_neighbours = W.checkNeighbours();
            var u = Random(current_neighbours);
            W.next = u;
            W = u;
        }
        // console.log("path to visited vertex from this vertex found");
        // console.log("New coordinates of W are " + W.i + " " + W.j);
        // console.log("Coordinates of w0 are " + w0.i + " " + w0.j);

        while (w0 != W) {
            // console.log("Carving Phase");
            w0.markVisited();
            w0.connect(w0.next);
            w0 = w0.next;
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
        if (top)
          neighbours.push(top);
        if (right)
          neighbours.push(right);
        if (bottom)
          neighbours.push(bottom);
        if (left)
          neighbours.push(left);
        return neighbours;
      }

    this.markVisited = function () {
        this.visited = true;
        Delete(this);
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

var jsonContent = JSON.stringify(Mazes);

fs.writeFile("Wilson.json", jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
    console.log("JSON file has been saved.");
});