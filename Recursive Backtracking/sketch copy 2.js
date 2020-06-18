var w;
var size;
var rows;
var cols;
var grid=[];
var v;
var u;

function setup() {
  size=400;
  w=40;
  createCanvas(size, size);
  // frameRate(5);
  background(255, 204, 0);
  rows = floor(size / w);
  cols = floor(size / w);
  for(let r=0;r<rows;r++)
  {
    for(let c=0;c<cols;c++)
    {
      var cell = new Cell(r,c);
      grid.push(cell);
    }
  }
  RecursiveBacktracking(grid[0],grid[0]);
  console.log("Recursive Backtracking Algorithm completed");
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}


function RecursiveBacktracking(cell,parent) // implemented recursively without explicit stack
{
  // visit cell
  cell.markVisited();
  parent.connect(cell);

  // collect neighbours in random order
  var neighbours=cell.checkNeighbours();
  shuffleArray(neighbours);

  // for neighbours of i
  for(var i=0;i<neighbours.length;i++)
  {
    // if neighbour is not visited
    if(!neighbours[i].visited)
    {
      // DFS(neighbour)
        RecursiveBacktracking(neighbours[i],cell);
    }  
  }
}


function draw() {
  stroke(51);
  noFill();
  for(let i=0;i<grid.length;i++)
  {
    grid[i].show();
  }
}



function Cell(i,j)
{
  this.i=i;
  this.j=j;
  this.index=Index(i,j);
  this.walls=[true,true,true,true];
  this.visited=false;
  this.parent=-1;
  this.checkNeighbours=function()
  {
    
    var neighbours=[];
    var top=grid[Index(i-1,j)];
    var right=grid[Index(i,j+1)];
    var bottom=grid[Index(i+1,j)];
    var left=grid[Index(i,j-1)];
    if(top && !top.visited)
      neighbours.push(top);
    if(right && !right.visited)
      neighbours.push(right);
    if(bottom && !bottom.visited)
      neighbours.push(bottom);
    if(left && !left.visited)
      neighbours.push(left);
    return neighbours;
  }

  this.focus=function()
  {
      noStroke();
      fill('blue');
      let x = this.i * w;
      let y = this.j * w;
      rect(x,y, w, w);
  }

  this.show = function() 
  {
    let x = this.i * w;
    let y = this.j * w;
    stroke(51);
    strokeWeight(5);
    // strokeColor('black');
    if(this.walls[0])
    {
      line(x,y,x,y+w);
    }
    if(this.walls[1])
    {
      line(x,y+w,x+w,y+w);
    }
    if(this.walls[2])
    {
      line(x+w,y+w,x+w,y);
    }
    if(this.walls[3])
    {
      line(x+w,y,x,y);
    }
    if (this.visited) {
      noStroke();
      fill(255, 255, 255, 100);
      rect(x, y, w, w);
    }
  }
  this.markVisited=function()
  {
    fill('red');
    rect(this.i*w, this.j*w, w, w); 
    this.visited=true;
  }
  this.connect=function(u)
  {
    var value=this.index-u.index;
    if(value==1)
    {
      this.walls[3]=false;
      u.walls[1]=false;
    }
    if(value==-1)
    {
      u.walls[3]=false;
      this.walls[1]=false;
    }
    if(value==cols)
    {
      this.walls[0]=false;
      u.walls[2]=false;
    }
    if(value==-cols)
    {
      u.walls[0]=false;
      this.walls[2]=false;
    }
  }
}

function Index(i,j)
{
  if(i<0 || j<0 || i>=rows || j>=cols)
    return -1;
  return i*cols+j;
}
