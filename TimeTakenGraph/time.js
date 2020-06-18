const {
    performance
} = require('perf_hooks');

var w;
var size;
var rows;
var cols;
var grid;
var v;
var u;
var W;
var w0 = W;
var unvisitedCells;
var cnt;


function setup(n) {
    cols = n;
    grid = [];
    unvisitedCells = [];
    cnt = 0;
    for (let r = 0; r < cols; r++) {
        for (let c = 0; c < cols; c++) {
            var cell = new Cell(r, c);
            grid.push(cell);
            unvisitedCells.push(cell);
        }
    }
    // console.log("Recursive Backtracking Algorithm completed");        
}

function Delete(v) {
    var IndexToBeDeleted=v.index2;
    var LastIndex=unvisitedCells.length-1;
    // var temp;
    // temp=unvisitedCells[IndexToBeDeleted];
    unvisitedCells[IndexToBeDeleted]=unvisitedCells[LastIndex];
    unvisitedCells[IndexToBeDeleted].index2=IndexToBeDeleted;
    unvisitedCells.pop();
  }

var t0;
var t1;
var RB_time=[];
var AB_time=[];
var W_time=[];
var HK_time=[];
var C_time=[];


function RunAlgos(n) {
    setup(n);
    // console.time('RecursiveBacktracking');
    t0=performance.now();
    RecursiveBacktracking(grid[0], grid[0]);
    t1=performance.now();
    RB_time.push((t1 - t0).toFixed(4));
    console.log("Call to RB took " + (t1 - t0).toFixed(4) + " milliseconds.")
    // console.timeEnd('RecursiveBacktracking');
    console.log("RB done");
    setup(n);

    // console.time('AldousBroder');
    t0=performance.now();
    AldousBroder();
    t1=performance.now();
    AB_time.push((t1 - t0).toFixed(4));

    // console.timeEnd('AldousBroder');
    console.log("AB done "+(t1 - t0).toFixed(4) + " milliseconds.");
    setup(n);
    // console.time('Wilson');
    t0=performance.now();
    Wilson();
    t1=performance.now();
    W_time.push((t1 - t0).toFixed(4));

    // console.timeEnd('Wilson');
    console.log("W done "+(t1 - t0).toFixed(4) + " milliseconds.");
    setup(n);
    // console.time('HuntAndKill');
    t0=performance.now();
    HuntAndKill();
    t1=performance.now();
    HK_time.push((t1 - t0).toFixed(4));
    // console.timeEnd('HuntAndKill');
    console.log("HK done "+(t1 - t0).toFixed(4) + " milliseconds.");

    setup(n);
    // console.time('HuntAndKill');
    t0=performance.now();
    Combined();
    t1=performance.now();
    C_time.push((t1 - t0).toFixed(4));
    // console.timeEnd('HuntAndKill');
    console.log("C done "+(t1 - t0).toFixed(4) + " milliseconds.");
}



function AldousBroder() {
    v = grid[Math.floor(Math.random() * grid.length)];
    v.markVisited();
    cnt++;
    while (cnt != cols * cols) {             // until all cells have not been visited
        var current_neighbours = v.checkNeighboursUltimate();
        var u = current_neighbours[Math.floor(Math.random() * current_neighbours.length)];
        // if(cnt!=rows*cols)
        //   u.focus();
        if (!u.visited) {
            v.connect(u);
            u.markVisited();
            cnt++;
        }
        v = u;
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


function Random(array) {
    return array[Math.floor(Math.random() * array.length)]
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

function Wilson() {
    var v0 = Random(unvisitedCells);
    v0.markVisitedUltimate();
    while (unvisitedCells.length > 0) {
        W = Random(unvisitedCells);
        // W.focus();
        // console.log("random unvisited w found");
        // console.log("Coordinates of W are " + W.i + " " + W.j);
        w0 = W;
        while (!W.visited) {
            var current_neighbours = W.checkNeighboursUltimate();
            var u = Random(current_neighbours);
            W.next = u;
            W = u;
        }
        // console.log("path to visited vertex from this vertex found");
        // console.log("New coordinates of W are " + W.i + " " + W.j);
        // console.log("Coordinates of w0 are " + w0.i + " " + w0.j);
        while (w0 != W) {
            // console.log("Carving Phase");
            w0.markVisitedUltimate();
            w0.connect(w0.next);
            w0 = w0.next;
        }
    }
}

function Combined() {
    var v0 = Random(unvisitedCells);
    v0.markVisitedUltimate();
    cnt++;
    while (cnt <= 0.3*cols*cols) {             // until 30% cells have not been visited
        var current_neighbours = v0.checkNeighboursUltimate();
        var u = Random(current_neighbours);
        if (!u.visited) {
            v0.connect(u);
            u.markVisitedUltimate();
            cnt++;
        }
        v0 = u;
    }
    v0=Random(unvisitedCells);
    while (unvisitedCells.length > 0) {
        W = Random(unvisitedCells);
        w0 = W;
        while (!W.visited) {
            var current_neighbours = W.checkNeighboursUltimate();
            var u = Random(current_neighbours);
            W.next = u;
            W = u;
        }
        while (w0 != W) {
            w0.markVisitedUltimate();
            w0.connect(w0.next);
            w0 = w0.next;
        }
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
    this.index2 = Index(i, j);
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
    this.checkNeighboursUltimate = function () {
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
    this.markVisitedUltimate = function () {
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

var x_axis=[];
for(var i=1;i<101;i++)
{
    RunAlgos(i);
    x_axis.push(i);

}
console.log(x_axis);
console.log(RB_time);
console.log(AB_time);
console.log(W_time);
console.log(HK_time);




// // console.log(Mazes);

// var jsonContent = JSON.stringify(Mazes);
// // console.log(jsonContent);

// fs.writeFile("RecursiveBacktracking.json", jsonContent, 'utf8', function (err) {
//     if (err) {
//         console.log("An error occured while writing JSON Object to File.");
//         return console.log(err);
//     }
//     console.log("JSON file has been saved.");
// });