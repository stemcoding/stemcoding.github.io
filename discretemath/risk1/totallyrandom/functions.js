if (location.hostname !== "") {
window.addEventListener("error", function(e) {
    createP('<p style="color:red">' + e.message + '</p>');   
});
}


// prevent warnings from my creative redefinition of random()
p5.disableFriendlyErrors = true;

zeroarguments = -1;
oneargument = -1;
twoarguments = -1;
arrayargument = -1;
throwdice = -1;
flipcoin = -1;
var showaxes;


function random(_min, _max) {
 if (typeof _max === 'undefined' && _min instanceof Array) {   
    if ( _min[0] == 1 && _min.length == 6 && max(_min) == 6 ) throwdice = 1;
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
  
    frameRate(2);
    textSize(30);
}

function clearscreen (_r, _g, _b) {
    background(_r,_g,_b);
    removeElements();
}

function display() {

    if (showaxes) {
          strokeWeight(1);
    var tri_width=7;
            var x_line=5;
            var y_line=5;
            var line_len=100;
         fill(0,0,0);
            line(x_line,y_line,x_line,y_line+line_len);
            line(x_line,y_line,x_line+line_len,y_line);
   
        triangle(x_line-tri_width/2,y_line+line_len,x_line+tri_width/2,y_line+line_len,x_line,y_line+line_len+10);
        triangle(x_line+line_len,y_line-tri_width/2,x_line+line_len,y_line+tri_width/2,x_line+line_len+10,y_line);
            strokeWeight(0);
            textSize(18);

       text("+x",x_line+line_len,y_line+20);
            text("+y",x_line,y_line+line_len+25);
 
     strokeWeight(15);      
   point(0,0);
  point(400,0);
  point(0,400);
  point(400,400);

  strokeWeight(0);
  textSize(20);

  text("(0,0)",7,25);  
  text("(400,0)",325,20);
  text("(0,400)",0,390);
  text("(400,400)",300,390);
 

  }

 

  

       if (!showaxes || showaxes == 'undefined') {
       createP('<b>OBJECTIVE #1:</b> Show the coordinate axes  <b>STATUS:</b> <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/question_mark.png">');
     } else if (showaxes) {
   createP('<b>OBJECTIVE #1:</b> Show the coordinate axes <b>STATUS:</b> <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/check_mark.png">');       
     } 

  
  
     if (zeroarguments == -1) {
       createP('<b>OBJECTIVE #2:</b> Add <code>random</code> function with zero arguments to program <b>STATUS:</b> <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/question_mark.png">');
     } else if (zeroarguments == 1) {
   createP('<b>OBJECTIVE #2:</b> Add <code>random</code> function with zero arguments to program <b>STATUS:</b> <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/check_mark.png">');       
     } 
  
    if (oneargument == -1) {
       createP('<b>OBJECTIVE #3:</b> Add <code>random</code> function with one argument to program <b>STATUS:</b> <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/question_mark.png">');
     } else if (oneargument == 1) {
   createP('<b>OBJECTIVE #3:</b> Add <code>random</code> function with one argument to program <b>STATUS:</b> <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/check_mark.png">');       
     } 
  
      if (twoarguments == -1) {
       createP('<b>OBJECTIVE #4:</b> Add <code>random</code> function with two arguments to program <b>STATUS:</b> <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/question_mark.png">');
     } else if (twoarguments == 1) {
   createP('<b>OBJECTIVE #4:</b> Add <code>random</code> function with two arguments to program <b>STATUS:</b> <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/check_mark.png">');       
     }
  
        if (throwdice == -1) {
       createP('<b>OBJECTIVE #5:</b> Add <code>random</code> function to throw dice <b>STATUS:</b> <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/question_mark.png">');
     } else if (throwdice == 1) {
   createP('<b>OBJECTIVE #5:</b> Add <code>random</code> function to throw dice <b>STATUS:</b> <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/check_mark.png">');       
     }
  
      if (flipcoin == -1) {
       createP('<b>OBJECTIVE #6:</b> Add <code>random</code> function to flip coin <b>STATUS:</b> <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/question_mark.png">');
     } else if (flipcoin == 1) {
   createP('<b>OBJECTIVE #6:</b> Add <code>random</code> function to flip coin <b>STATUS:</b> <img width=15 height=15 src="https://www.asc.ohio-state.edu/orban.14/stemcoding/check_mark.png">');       
     }
  
  
}

