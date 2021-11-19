Ntrials = 0;
Nwin = 0.0;

function draw() { 
  clearscreen(240,240,240); // light gray
  display();
  
  diceval1 = random([1,2,3,4,5,6]);
 
  drawText('Dice1 value = '+diceval1,0.05*width,0.1*height);
  
  Ntrials += 1.0; 
  
  if (1 > 0) { // Note: 1 > 0 is always true
     Nwin += 1.0;
  }
  winfrac = Nwin/Ntrials;
  
  graph1.addPoint(100*winfrac);
  graph1.display();
  drawText('Ntrials = ' + Ntrials,0.25*width,0.2*height);
  
  graph2.addPoint(50.0); // expected value
  graph2.display();
  
} // DO NOT ADD ANY CODE AFTER THIS LINE!!!