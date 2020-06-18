var w;
var size;
var rows;
var cols;
var grid = [];
var unvisitedCells = []
var v;
var u;
var W;
var w0 = W;
var flag = false;

function setup() {
  size=1000;
  w=10;
  createCanvas(size, size);
  background(255, 204, 0);
  rows = floor(size / w);
  cols = floor(size / w);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      var cell = new Cell(r, c);
      grid.push(cell);
      unvisitedCells.push(cell);
    }
  }
  Wilson();
  console.log("Algorithm completed");
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


function Wilson() {
  var v0 = random(unvisitedCells);
  v0.markVisited();
  console.log("setup successfull");
  console.log("Coordinates of v are " + v0.i + " " + v0.j);
  while (unvisitedCells.length > 0) {
    W = random(unvisitedCells);
    W.focus();
    console.log("random unvisited w found");
    console.log("Coordinates of W are " + W.i + " " + W.j);
    w0 = W;
    while (!W.visited) {
      var current_neighbours = W.checkNeighbours();
      var u = random(current_neighbours);
      W.next = u;
      W = u;
    }
    console.log("path to visited vertex from this vertex found");
    console.log("New coordinates of W are " + W.i + " " + W.j);
    console.log("Coordinates of w0 are " + w0.i + " " + w0.j);

    while (w0 != W) {
      console.log("Carving Phase");
      w0.markVisited();
      w0.connect(w0.next);
      w0 = w0.next;
    }
  }
}

function draw() {
  stroke(51);
  var i;
  for (i = 0; i < grid.length; i++) {
    grid[i].show();
  }
}



function Cell(i, j) {
  this.i = i;
  this.j = j;
  this.index = Index(i, j);
  this.index2 = Index(i, j);
  this.walls = [true, true, true, true];
  this.visited = false;
  this.next = -1;
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

  this.focus = function () {
    noStroke();
    fill('blue');
    let x = this.i * w;
    let y = this.j * w;
    rect(x, y, w, w);
  }

  this.show = function () {
    let x = this.i * w;
    let y = this.j * w;
    stroke(51);
    strokeWeight(5);
    // strokeColor('black');
    if (this.walls[0]) {
      line(x, y, x, y + w);
    }
    if (this.walls[1]) {
      line(x, y + w, x + w, y + w);
    }
    if (this.walls[2]) {
      line(x + w, y + w, x + w, y);
    }
    if (this.walls[3]) {
      line(x + w, y, x, y);
    }
    if (this.visited) {
      noStroke();
      fill(255, 255, 255, 100);
      rect(x, y, w, w);
    }
  }
  this.markVisited = function () {
    fill('red');
    rect(this.i * w, this.j * w, w, w);
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

function Index(i, j) {
  if (i < 0 || j < 0 || i >= rows || j >= cols)
    return -1;
  return i * cols + j;
}
