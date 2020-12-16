var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];
var divisionHeight=300;
var particle;
var turn=0;
var gameState = "play";
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   
   for(var k=0; k<=width;k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
 }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);

  fill(255, 255, 255);
  text("500",20,790);
  text("500", 100,790);
  text("500", 180,790);
  text("500", 260,790);
  text("100", 340,790);
  text("100", 420,790);
  text("100", 500,790);
  text("200", 580,790);
  text("200", 660,790);
  text("200", 740,790);
  Engine.update(engine);
  if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
  }
if(particle!=null){
  particle.display();
  if (particle.body.position.y>760)
         {
               if (particle.body.position.x < 300) 
               {
                   score=score+500;      
                   particle=null;
                   if ( turn>= 5) gameState ="end";                          
               }
 
 
               else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
               {
                     score = score + 100;
                     particle=null;
                     if ( turn>= 5) gameState ="end";
 
               }
               else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
               {
                     score = score + 200;
                     particle=null;
                     if ( turn>= 5)  gameState ="end";
 
               }      
               
         }
   
}
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();   
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

  function mousePressed(){ 
     if (gameState!=="end") {
     turn++;
     particle = new Particle(mouseX, 10,10, 10);
   }
}

