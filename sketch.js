let len
let w = 50
let snake
let x,y, i
function setup() {
	createCanvas(windowWidth, windowHeight);
	len = windowWidth/w
	//canvas.center()
	// put setup code here
	snake = new Snake(10,20)
	food = new Food()
}

function draw() {
	// put drawing code here
	frameRate(10)
	//background(33, 69, 89)
	showGrid()
	food.show()
	snake.show()
	snake.move()


	let is_eaten = snake.x == food.x && snake.y == food.y
	if(is_eaten)
	{
		food = new Food()
		snake.tail.push([snake.x,snake.y])
	}

	if(snake.die())
	{
		snake = new Snake(15,5)
		food = new Food()
	}

}

function keyPressed()
{
	
	if (keyCode === UP_ARROW){
		snake.setDir("up")
	  }
	else if (keyCode == RIGHT_ARROW) {
		snake.setDir("right")
	}
	else if (keyCode == LEFT_ARROW) {
		snake.setDir("left")
	}
	else if (keyCode == DOWN_ARROW) {
		snake.setDir("down")
	}
}


const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

//Reset Canvas whenever screen width changes
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	len = windowWidth/w

  }