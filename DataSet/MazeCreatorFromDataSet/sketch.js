var w;
var size;
var rows;
var cols;
var grid=[];
// var v;
// var u;



function setup() {
  size=400;
  w=40;
  createCanvas(size, size);
  frameRate(8);
  background(255, 204, 0);
  rows = floor(size / w);
  cols = floor(size / w);
  for(var i=0;i<data.length;i++)
  {
    var cell=new Cell(data[i]);
    grid.push(cell);
  }
}
var index=0;
function draw() {
  stroke(51);
  noFill();
  for(let i=0;i<grid.length;i++)
  {
    grid[i].show();
  }
  if(index!=traversal.length)
  {
    grid[traversal[index]].focus();
    index++;
  }

}


function Cell(cell)
{
  this.i=cell["i"];
  this.j=cell["j"];
  this.index=cell["index"];
  this.walls=cell["walls"];
  this.visited=cell["visited"];
  this.parent=cell["parent"];

  this.focus = function () {
    noStroke();
    fill('blue');
    let x = this.i * w;
    let y = this.j * w;
    rect(x, y, w, w);
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
  
}

