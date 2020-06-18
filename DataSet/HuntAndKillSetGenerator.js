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
var v;
var u;
var Mazes=[];



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
    HuntAndKill();
    console.log("HuntAndKill Algorithm completed");        
    var grid_copy=grid.slice();
    Mazes.push(grid_copy);
}

function Index(i, j) {
    if (i < 0 || j < 0 || i >= rows || j >= cols)
        return -1;
    return i * cols + j;
}

function Random(array) {
    return array[Math.floor(Math.random() * array.length)]
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function HuntAndKill() {
    v = grid[0];
    v.markVisited();
    var current_neighbours = v.checkNeighbours();
    while (current_neighbours.length > 0) {
        var u = Random(current_neighbours);
        u.markVisited();
        v.connect(u);
        v = u;
        var current_neighbours = v.checkNeighbours();
    }
    for (var i = 0; i < grid.length; i++) {
        var cell = grid[i];
        // cell.focus();
        var adjacent = cell.checkVisitedNeighbour();
        if (!cell.visited && (adjacent)) {
            v = cell;
            v.connect(adjacent);
            // adjacent.connect(v);
            v.markVisited();
            var current_neighbours = v.checkNeighbours();
            while (current_neighbours.length > 0) {
                var u = Random(current_neighbours);
                u.markVisited();
                v.connect(u);
                v = u;
                var current_neighbours = v.checkNeighbours();
            }
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
    this.checkVisitedNeighbour = function () {
        var top = grid[Index(i - 1, j)];
        var right = grid[Index(i, j + 1)];
        var bottom = grid[Index(i + 1, j)];
        var left = grid[Index(i, j - 1)];
        if (top && top.visited)
            return top;
        if (right && right.visited)
            return right;
        if (bottom && bottom.visited)
            return bottom;
        if (left && left.visited)
            return left;
        return false;
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


var jsonContent = JSON.stringify(Mazes);

fs.writeFile("HuntAndKill.json", jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
    console.log("JSON file has been saved.");
});