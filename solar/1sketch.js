x = 375;
y = 250;

vx = 0;
vy = 0;

vspeed = 50;

dt = 0.1;

blob_radius = 25;

xpaddle = 375;
ypaddle = 10;
paddle_width = 100;

function draw(){

    // Update location
    x += vx*dt;
    y += vy*dt;

    // 1st if statement
    if ( y + blob_radius > height ) {  
       vy = -vy;  // fix this!
    }  
  
    // 2nd if statement
  	if ( (x - blob_radius < 0) | (x + blob_radius > width) ) { 
       vx = -vx;  // fix this!
    }

    // 3rd if statement
    if ( (y - blob_radius < ypaddle) & (abs(x - xpaddle) < paddle_width/2)) {
       vy = -vy;  // fix this!
    }

    // Move the paddle
    if (keyIsDown(LEFT_ARROW)) {
       xpaddle += -10;
    }
    if (keyIsDown(RIGHT_ARROW)) {
       xpaddle += 10;
    }
  
    // Draw axes and other stuff
    // This will clear the screen and re-draw it
    display();
    
        if (y-blob_radius < 0) {
     drawText('Game Over!',0.42*width,height/2); 
     exit();
    }
    
        for( i = 0; i < xhistory.length ; i+= 1) {
     drawPoint(xhistory[i],yhistory[i]); 
    }

    drawBlob(x,y,vx,vy,blob_radius);
    drawLine(xpaddle-paddle_width/2,ypaddle,xpaddle+paddle_width/2,ypaddle);
  
} // end draw()    DO NOT ADD ANY CODE PAST THIS LINE!!!!
    