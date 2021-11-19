if (location.hostname !== "") {
window.addEventListener("error", function(e) {
    createP('<p style="color:red">' + e.message + '</p>');   
});
}

showmilestones = false;

var diceval1;
var diceval2 = 0;
var diceval3;
var diceval4;
thenumberofdice = 0;

Ncorrect_compare = 0;

function random(_min, _max) {
 if (typeof _max === 'undefined' && _min instanceof Array) { 
    if ( _min[0] == 1 && _min.length == 6 && max(_min) == 6 )
    thenumberofdice += 1;
    if ( typeof _min[0] === 'string' && _min.length == 2) flipcoin = 1;
    return _min[Math.floor(Math.random() * _min.length)]
 }  else if (typeof _min !== 'undefined' & typeof _max !== 'undefined') { 
   twoarguments = 1;
 return  (_max - _min)*Math.random() + _min ; 
 } else if (typeof _min === 'undefined' & typeof _max === 'undefined') {
   zeroarguments = 1;
   return Math.random();
 } else if (typeof _min !== 'undefined' & typeof _max === 'undefined') {
   oneargument = 1;
   return _min*Math.random();
 } 
}



function setup() { 
    mycanvas = createCanvas(400, 400);
    var iPad = navigator.maxTouchPoints == 5;
    if (iPad) {
	mycanvas.elt.style = 'width:'+displayHeight/3+'px; height:'+displayHeight/3+'px;';
    } else {
	mycanvas.elt.style = 'width:'+displayHeight/2+'px; height:'+displayHeight/2+'px;';
    }    
  
  graph1 = new Graph();
  graph1.colorFunction = color(175);
  graph1.xTitle = "Ntrials";
  graph1.yTitle = "100";
  graph2 = new Graph();
  graph2.colorFunction = color(0);
  frameRate(1);
} 

function clearscreen (_r, _g, _b) {
    background(_r,_g,_b);
    removeElements();
}

alwayswin = -1;
ifcompare = -1;
seconddice = -1;

var diceval1old;
var diceval2old;


function display() {
  
  if (showmilestones) {
  
  if (frameCount > 5 && Nwin == frameCount-1 && Ntrials == frameCount-1 && ifcompare == -1 ) {
   // print("yep");
     alwayswin = 1;  
  }
  
  if (Ntrials == frameCount-1 && Nwin < frameCount-1) {
    alwayswin = 0;
  }
  if (ifcompare == 1) {
    alwayswin = 0;
  }
 // print('Nwin = ' + Nwin + 'frameCount = ' + frameCount);

     checkerstring = '';
  
  if (alwayswin == 1) {
	checkerstring += '<img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/red_x.png">';
    } else if (alwayswin == -1) {
	checkerstring += '<img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/question_mark.png">';
    } else if (alwayswin == 0) {
      checkerstring += '<img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/check_mark.png">';
    }
  
    createP('<b>OBJECTIVE:</b> Replace <code>if (1 > 0) </code> <b>STATUS:</b>' + checkerstring);
  
  
     checkerstring = '';
  
    rms = 0;
    lengthofarr = graph1.PlotArray.length;
    nmeas = 40;
    for (i = lengthofarr - nmeas ; i < lengthofarr; i += 1 )     {
      rms += (graph1.PlotArray[i] - graph2.PlotArray[i])**2;
    }
    rms = rms/nmeas;
    rms = sqrt(rms);
   // print(rms);
    
    if (rms/graph1.PlotArray[lengthofarr-1] < 0.07 & frameCount > 20) {
     checkerstring += '<img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/check_mark.png">'; 
    } else {
    checkerstring += '<img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/question_mark.png">';
    }
    createP('<b>OBJECTIVE:</b> Measured win percentage agrees with expectation <b>STATUS:</b>' + checkerstring);

   checkerstring = '';
    
  
  
  if (thenumberofdice > 1 && diceval2 > 0) {
    seconddice = 1;
  } 
  
  if (thenumberofdice > 1 && diceval2 == 0) { // zero dice
    seconddice = 0;
  }
  
  if (seconddice == 1) {
    checkerstring += '<img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/check_mark.png">';    
  } else if (seconddice == 0) {
    checkerstring += '<img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/red_x.png">';     
  } else if (seconddice == -1) {
    checkerstring += '<img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/question_mark.png">';    
  }
  
  createP('<b>OBJECTIVE:</b> Add second dice <b>STATUS:</b>' + checkerstring);
  if (seconddice == 0) {
        createP('<span style="color:red"> Use <code>diceval2</code> to store the value of the second dice </span>');
  }
  
   checkerstring = '';

  if (frameCount > 2 && diceval1 > diceval2 && Nwin == Nwinold + 1 && thenumberofdice > 1 ) {
   Ncorrect_compare += 1;
  }  
  
    if (frameCount > 2 && diceval1 > diceval2 && Nwin == Nwinold  && thenumberofdice > 1 ) {
      ifcompare = 0;
    }  
  
  if (Ncorrect_compare > 10 && ifcompare !== 0) {
    ifcompare = 1;
  }
  
  if (frameCount > 2 && diceval1 <= diceval2 && Nwin == Nwinold){
     icompare = 0;  
  }   
  
  if (ifcompare == 1) {
        checkerstring += '<img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/check_mark.png">';
  } else if (ifcompare == 0) {
        checkerstring += '<img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/red_x.png">';

  } else if (ifcompare == -1) {
      checkerstring += '<img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/question_mark.png">';    
  }
  
  
  createP('<b>OBJECTIVE:</b> Compare <code>diceval1</code> and <code>diceval2</code> in if statement <b>STATUS:</b>' + checkerstring);
    
  }
  
    
  thenumberofdice = 0;
  
    diceval1old = diceval1;
  diceval2old = diceval2;
  Nwinold = Nwin;
  Ntrialsold = Ntrials;

}


function Graph() {
    
  m_x = 50;
  m_y = 100;
  
  m_size_x = 250;
  m_size_y = 200;
  
  fontSize = 25;
  
  this.DataArray = [];
  this.PlotArray = [];
  
  this.colorFunction = color(0,0,0);

  this.xTitle = "";
  this.yTitle = "";
  
  this.minY = 0;
  this.maxY = 0;
  
  this.increaseMarginFactor = 1.1;
  
  this.display = function() {
    this.setTitle();
    this.setAxes();
    this.calcPlotArray();
    this.drawPoints();
    //print(this.DataArray);
  }
  
  this.setTitle = function (){
    textSize(fontSize);
    fill(0,0,0);
    noStroke();
    text(this.xTitle, (m_x + m_size_x - this.xTitle.length*fontSize/2), (m_y + m_size_y + 25));
    text(this.yTitle, m_x - 50,m_y+8);    
  }
  
  this.setAxes = function() {
    stroke(0);
    strokeWeight(2);
    line(m_x,m_y,m_x,m_y+m_size_y);
    line(m_x,m_y+m_size_y,m_x+m_size_x,m_y+m_size_y);
  }
  
  this.addPoint = function( newpoint ) {
   append(this.DataArray, newpoint); 
    
    
    MaxLength = 200;
  	if (this.DataArray.length > MaxLength) {
    this.DataArray = subset(this.DataArray,this.DataArray.length-MaxLength,this.DataArray.length);
    }   
    
    
    
  }
  
  this.calcPlotArray = function() {
   //this.minY = min(this.DataArray);
   this.minY = 0; 
//   this.maxY = this.increaseMarginFactor*max(this.DataArray);
       //this.maxY = this.increaseMarginFactor;
  // this.PlotArray = m_size_y*this.DataArray/this.maxY;
    //this.PlotArray = this.DataArray;
    for(var i = 0; i < this.DataArray.length ; i++){
//     this.PlotArray[i] = m_size_y*this.DataArray[i]/this.increaseMarginFactor; 
     this.PlotArray[i] = m_size_y*this.DataArray[i]/100;       
    }
  }

  this.drawPoints = function() {
    var xi;
   for (var i = 1; i < this.PlotArray.length ; i++) {
    //print(i);
    xi = m_size_x*i/this.PlotArray.length;
    xi_previous = m_size_x*(i-1)/this.PlotArray.length;
     //print(xi);
     strokeWeight(2);
     //stroke(0);
    stroke(this.colorFunction);
//    point(m_x+xi,m_y+m_size_y-this.PlotArray[i]);
     line(m_x+xi,m_y+m_size_y-this.PlotArray[i],m_x+xi_previous,m_y+m_size_y-this.PlotArray[i-1]);
   }
        strokeWeight(2);
    fill(this.colorFunction);
    text(this.DataArray[this.DataArray.length-1].toFixed(0),m_x+xi,m_y+m_size_y-this.PlotArray[this.PlotArray.length-1]);
    stroke(0);
    fill(0);
  }
  
    /*
  this.drawPoints = function () {
   this.minY = min(this.Array);
   this.maxY = this.increaseMarginFactor*max(this.Array);
    
   for(var xi = 0; xi < this.m_size_x ; xi++ ) {
     pos = this.Array.length*xi/m_size_x;
     
        x1 = oxi + m_x;
        y1 = oyi + m_y + m_size_y;
        x2 = xi + m_x;
        y2 = yi + m_y + m_size_y; 
   }*/
    
//  }  
  
}


function drawText( _str,  _x, _y){
    if (isNumeric(_str)){
	_str = round(10*_str)/10;
    }
    textSize(20);
    strokeWeight(1);
    text(_str, _x, _y);
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
