var w;
var size;
var rows;
var cols;
var grid=[];
var v;
var u;
var stack=[];

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
  
  RecursiveBacktracking();
  console.log("Recursive Backtracking Algorithm completed");
}

function RecursiveBacktracking()  // implemented with explicit stack
{
  var start=grid[0];
  start.markVisited();
  stack.push(start);
  start.parent=0;
  while(stack.length>0)
  {
    v=stack.pop();    
    var current_neighbours=v.checkNeighbours();
    var u=random(current_neighbours);
    if(u)
    {
      u.markVisited();
      v.connect(u);
      u.parent=v;
      stack.push(u);
    }
    else if(v.parent!=0)
    {
      stack.push(v.parent);
      v.parent.focus();
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
