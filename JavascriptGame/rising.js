// Hook the ready event.  This will fire
// when the DOM and Pulse are both ready for use

pulse.ready(function() 
{

  // Create the engine, scene, and layer.
  var engine = new pulse.Engine({ gameWindow: 'gameWindow', width: 300, height: 680 });
  var scene = new pulse.Scene(); 
  var layer = new pulse.Layer();
	document.bgColor="#00BFFF"
 
 // Create a Score object.  The Score class extends pulse.CanvasLabel.
    var score = new Score( { text: "0" } );
	score.position.x = 250;
	score.position.y = 50;
	score.rise = rise;
	score.cloud = cloud;
 
    var lblock = new LeftBlock({ src: 'block.png', size: {width: 10, height: 600} });
	lblock.position.x = 0;
	lblock.position.y = 300;
	layer.addNode(lblock);


    var tblock = new TopBlock({ src: 'block.png', size: {width: 400, height: 10} });
	tblock.position.x = 150;
	tblock.position.y = 0;
	layer.addNode(tblock);

    var rblock = new RightBlock({ src: 'block.png', size: {width: 10, height: 600} });
	rblock.position.x = 300;
	rblock.position.y = 300;
	layer.addNode(rblock);

    var bblock = new BottomBlock({ src: 'block.png', size: {width: 300, height: 10} });
	bblock.position.x = 150;
	bblock.position.y = 680;
	layer.addNode(bblock);

	
  var rise = new Rise({ src: 'riser.png', size: {width: 75, height: 55} });
  rise.score = score;
  rise.cloud = cloud;
  rise.bullet = bullet;
  rise.position.x = 150;
  rise.position.y = 480;
  rise.maxX = 250;
  rise.maxY = 600;
  layer.addNode(rise);

 
  var bullet = new Bullet({src: 'bullet.png', size: {width: 10, height: 10}});
  bullet.rise = rise;
  bullet.cloud = cloud;
  bullet.score = score;
  layer.addNode(bullet);
 
  var cloud = new Cloud({ src: 'cloud.png', size: {width: 50, height: 50} });
  cloud.position.x = ((Math.random()*280)+20); //between 20 and 280
  cloud.velocity.y = Math.random()/2;
  cloud.score = score;
  cloud.bullet = bullet;
  cloud.rise = rise;
  layer.addNode(cloud);
  
  var stormCloud = new Cloudstorm({ src: 'stormCloud.png', size: {width: 50, height: 50} });
  stormCloud.position.x = ((Math.random()*280)+20); //between 20 and 280
  stormCloud.velocity.y = Math.random()/2;
  stormCloud.score = score;
  stormCloud.bullet = bullet;
  stormCloud.rise = rise;
  layer.addNode(stormCloud);
 
function A()
{
 var rise = new Rise({ src: 'riser.png', size: {width: 75, height: 55} });
  rise.score = score;
  rise.cloud = cloud;
  rise.bullet = bullet;
  rise.position.x = 150;
  rise.position.y = 480;
  rise.maxX = 290;
  rise.maxY = 670;
  layer.addNode(rise);

 bullet = function()
 {
 var bullet = new Bullet({src: 'bullet.png', size: {width: 10, height: 10}});
   bullet.rise = rise;
   bullet.cloud = cloud;
   bullet.score = score;
   bullet.position.x = rise.position.x;
   bullet.position.y = rise.position.y;
   layer.addNode(bullet);
   
  var cloud = new Cloud({ src: 'cloud.png', size: {width: 50, height: 50} });
  cloud.position.x = ((Math.random()*280)+20); //between 20 and 280
  cloud.velocity.y = Math.random()/2;
  cloud.score = score;
  cloud.bullet = bullet;
  cloud.rise = rise;
  layer.addNode(cloud);
};
 storm = function()
 {
   var stormCloud = new Cloudstorm({ src: 'stormCloud.png', size: {width: 50, height: 50} });
  stormCloud.position.x = ((Math.random()*280)+20); //between 20 and 280
  stormCloud.velocity.y = Math.random()/2;
  stormCloud.score = score;
  stormCloud.bullet = bullet;
  stormCloud.rise = rise;
  layer.addNode(stormCloud);
  };
}

A();
bullet();
storm();
//cloud();
//setInterval(cloud, 2000);
setInterval(storm, 5000);
setInterval(bullet, 1000);


 // Add the score object to the layer.
  layer.addNode(score);

  // Make the layer's origin 0,0. The origin defines how objects
  // are positioned - by default objects are positioned by their centers.
  // (0,0) represents the top-left corner.
  layer.anchor.x = 0;
  layer.anchor.y = 0;

  // Add the layer to the scene, then add the scene to the engine.
  scene.addLayer(layer);
  engine.scenes.addScene(scene);

  // Activate the scene.
  engine.scenes.activateScene(scene);

  // Start the game loop and provide a callback, loop, 
  // that will be invoked on each update loop.
  engine.go(20);
});

var Rise = pulse.Sprite.extend({
  init: function(params) {

    // Call the base constructor.
    this._super(params);

    // Add properties to determine what arrow key has been pressed.
    this.arrowUp = false;
    this.arrowDown = false;
	this.arrowRight = false;
	this.arrowLeft = false;

    this.size.width = 75;
    this.size.height = 55;
    this.maxX = 290;
    this.maxY = 670;


	
    // Bind the key events to set the arrow up/down properties.
    this.events.bind('keydown', 
      function(e) {
        if(e.keyCode == 38) {
          e.sender.arrowUp = true;
        }  
        else if(e.keyCode == 40) {
          e.sender.arrowDown = true;
        }
      });

    this.events.bind('keyup',
      function(e) {
        if(e.keyCode == 38) {
          e.sender.arrowUp = false;
        }  
        else if(e.keyCode == 40) {
          e.sender.arrowDown = false;
        }
      });
	  
	      this.events.bind('keydown', 
      function(e) {
        if(e.keyCode == 37) {
          e.sender.arrowRight = true;
        }  
        else if(e.keyCode == 39) {
          e.sender.arrowLeft = true;
        }
      });

    this.events.bind('keyup',
      function(e) {
        if(e.keyCode == 37) {
          e.sender.arrowRight = false;
        }  
        else if(e.keyCode == 39) {
          e.sender.arrowLeft = false;
        }
      });
	  
  },

  /* The update function runs every game "tick." This update function
     will move the player based on what key is currently down, as long
     as it is in the bounds of the game canvas. */
	 
  update: function(elapsed) {
    this._super(elapsed);
	this.maxX = 290;
    this.maxY = 670;

	
//////////////////////////

	if(this.position.x > 300)
	{
		this.position.x = 0;
	}
	else if(this.position.x < 0)
	{
		this.position.x = 300;
	}
	else if(this.position.y > 680)
	{
		this.position.y = 0
	}
	else if(this.position.y < 0)
	{
		this.position.y = 680
	}

    if(this.auto) {
      if(this.cloud.position.y < this.position.y) {
        this.position.y -= .35 * elapsed;
      }
      else if(this.cloud.position.y > this.position.y) {
        this.position.y += .35 * elapsed;
      }
    }
    else {
      if(this.arrowUp) {
        this.position.y -= .35 * elapsed;
      }
      else if(this.arrowDown) {
        this.position.y += .35 * elapsed;
      } 
    }
	
	if(this.auto) {
      if(this.cloud.position.x < this.position.x) {
        this.position.x -= .35 * elapsed;
      }
      else if(this.cloud.position.x > this.position.x) {
        this.position.x += .35 * elapsed;
      }
    }
    else {
      if(this.arrowRight) {
        this.position.x -= .35 * elapsed;
      }
      else if(this.arrowLeft) {
        this.position.x += .35 * elapsed;
      } 
    }
	
  }  
});


var Cloud = pulse.Sprite.extend({

  init: function(params) {
   
    // Call the base constructor.
    this._super(params);

    // Setup a few velocities, which determine the cloud's speed.
    this.velocity = { };
    this.velocity.x =  0;
    this.velocity.y = .05;

	this.size.width = 50;
	this.size.height = 50;
    // The bounds of the area in which the cloud can go.
    this.maxX = 300;
    this.maxY = 780;
		
	
  },

  /* Bounces the cloud if it has made it to any of the bounds,
     at a 45 degree angle. Also increments the score if it has
     reached a vertical bounds, IE has made it to a players side. */
  update: function(elapsed) {
    this._super(elapsed);

    this.position.x += elapsed * this.velocity.x;
    this.position.y += elapsed * this.velocity.y;
	
    var xMax = this.maxX - (this.size.width / 2);
    var yMax = this.maxY - (this.size.height / 2);
    var xMin = this.size.width / 2;
    var yMin = this.size.height / 2;
	

if(this.position.y > yMax) 	
{
	this.position.y = 0;
	this.score.playerScore();
}
	
if(this.position.x - this.rise.position.x <= 50 && this.position.y - this.rise.position.y <= 50 && !(this.position.y - this.rise.position.y < 0 || this.position.x - this.rise.position.x < 0)) //the magic works
{
	this.score.cloudScore();
	this.position.y = 780;
}

if(this.rise.position.x - this.position.x <= 50 && this.rise.position.y - this.position.y <= 50 && !(this.rise.position.y - this.position.y < 0 || this.rise.position.x - this.position.x < 0)) //the magic works
{
	this.score.cloudScore();
	this.position.y = 780;
}

if(this.position.x - this.bullet.position.x <= 75 && this.position.y - this.bullet.position.y <= 75 && !(this.position.y - this.bullet.position.y < 0 || this.position.x - this.bullet.position.x < 0))
{
	//this.position != this.rise.position;  
	this.position.y = 0;
	//this.position.y = 780;
}

  },
});



var Bullet = pulse.Sprite.extend({
  init: function(params) {

    // Call the base constructor.
    this._super(params);

    // Add properties to determine what arrow key has been pressed.
    this.altDown = false;

    this.size.width = 5;
    this.size.height = 10;
    this.maxX = 300;
    this.maxY = 680;
	
	
    // Bind the key event to set the alt key properties.
    this.events.bind('keydown', 
      function(f) {
        if(f.keyCode == 17) {   //ctrl
          f.sender.altDown = true;
        }  
      });

	  
  },

  
	
  update: function(elapsed) {
    this._super(elapsed);

	
if(this.altDown)
{
	this.altDown == true;
}	

if(this.altDown == true)
{
	this.rise.position != this.position;
}

if(this.altDown == true) 	
{
    this.position.y -= .35 * elapsed;
    this.position != this.rise.position;    
}
/*
if(this.position.x - this.cloud.position.x <= 50 && this.position.y - this.cloud.position.y <= 50 && !(this.position.y - this.cloud.position.y < 0 || this.position.x - this.cloud.position.x < 0)) //the magic works
{
	//this.position != this.rise.position;  
	this.cloud.position.y = 700;
	this.position.y = 0;
}
*/

}  
});


// This class keeps track of the score and draws it to the canvas.
var Score = pulse.CanvasLabel.extend({
  init: function(params) {
    this._super(params);

    this.scoreA = 0;
  },

  
  playerScore : function() {
    this.scoreA++;
    this.text = this.scoreA; //+ " " + this.scoreB;
	if(this.scoreA == 500) //if score a is 500 reload page and alert player
	{
	alert("A Winner is you");
	location.reload();
	}
  },
  
  
    cloudScore : function() {
    this.scoreA--;
    this.text = this.scoreA; //+ " " + this.scoreB;
	if(this.scoreA == -50)//if score is -500 reload page
	{
	alert("LOO-HOO-ZUH-HER");
	location.reload();
	}
  },

});



var LeftBlock = pulse.Sprite.extend({
  init: function(params) {

    // Call the base constructor.
    this._super(params);

	this.position.x = 0;
	this.position.y = 300;
    this.size.width = 10;
    this.size.height = 800;
  }  
});



var RightBlock = pulse.Sprite.extend({
  init: function(params) {

    // Call the base constructor.
    this._super(params);

	this.position.x = 300;
	this.position.y = 300;
    this.size.width = 10;
    this.size.height = 800;
  }  
});


var TopBlock = pulse.Sprite.extend({
  init: function(params) {

    // Call the base constructor.
    this._super(params);

	this.position.x = 150;
	this.position.y = 0;
    this.size.width = 300;
    this.size.height = 10;
  }  
});

var BottomBlock = pulse.Sprite.extend({
  init: function(params) {

    // Call the base constructor.
    this._super(params);

	this.position.x = 150;
	this.position.y = 680;
    this.size.width = 300;
    this.size.height = 10;
  }  
});

var Cloudstorm = pulse.Sprite.extend({

  init: function(params) {
   
    // Call the base constructor.
    this._super(params);

    // Setup a few velocities, which determine the cloud's speed.
    this.velocity = { };
    this.velocity.x =  0;
    this.velocity.y = .05;

	this.size.width = 50;
	this.size.height = 50;
    // The bounds of the area in which the cloud can go.
    this.maxX = 300;
    this.maxY = 780;
		
	
  },

  /* Bounces the cloud if it has made it to any of the bounds,
     at a 45 degree angle. Also increments the score if it has
     reached a vertical bounds, IE has made it to a players side. */
  update: function(elapsed) {
    this._super(elapsed);

    this.position.x += elapsed * this.velocity.x;
    this.position.y += elapsed * this.velocity.y;
	
    var xMax = this.maxX - (this.size.width / 2);
    var yMax = this.maxY - (this.size.height / 2);
    var xMin = this.size.width / 2;
    var yMin = this.size.height / 2;
	

if(this.position.y > yMax) 	
{
	this.position.y = 0;
	this.score.playerScore();
}
	
if(this.position.x - this.rise.position.x <= 50 && this.position.y - this.rise.position.y <= 50 && !(this.position.y - this.rise.position.y < 0 || this.position.x - this.rise.position.x < 0)) //the magic works
{
	this.score.cloudScore();
	this.score.cloudScore();
	this.score.cloudScore();
	this.score.cloudScore();
	this.score.cloudScore();
	this.position.y = 780;
}

if(this.rise.position.x - this.position.x <= 50 && this.rise.position.y - this.position.y <= 50 && !(this.rise.position.y - this.position.y < 0 || this.rise.position.x - this.position.x < 0)) //the magic works
{
	this.score.cloudScore();
	this.score.cloudScore();
	this.score.cloudScore();
	this.score.cloudScore();
	this.score.cloudScore();
	this.position.y = 780;
}

/*
if(this.position.x - this.bullet.position.x <= 100 && this.position.y - this.bullet.position.y <= 100 && !(this.position.y - this.bullet.position.y < 0 || this.position.x - this.bullet.position.x < 0))
{
	//this.position != this.rise.position;  
	this.position.y = 0;
	//this.position.y = 780;
}
*/
  },
});

