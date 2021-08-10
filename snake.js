class Snake{
    constructor(x, y)
    {
        this.color= [0,150,0]
        this.x = x
        this.y = y
        this.tail = [[this.x, this.y], [this.x, this.y]]
        this.length = this.tail.length
        this.dir = "right"
    }
    show(){
        //Show Head
        rectMode(CENTER)
        // fill(255,0,0)
        // rect(this.x * w, this.y* w, w, w )

        //Show Tail
        for(let i = 1; i < this.tail.length; i++)
        {
            fill(this.color)
            rect(this.tail[i][0] * w, this.tail[i][1] * w, w, w, 2)
        }
        
    }

    die()
    {

      //Dies when he hits his tail
      for(i = 3; i < snake.tail.length; i++)
      {
        if(equals(snake.tail[2], snake.tail[i]))
        {
          return true
        }
      }
      //Dies when he hits a wall
      return (this.x >= len || this.y >= windowHeight/w || this.x <= 0 || this.y <= 0)
    }

    move(){
      if(this.dir == "up")
        this.y -= 1
      else if(this.dir == "right")
        this.x += 1
      else if(this.dir == "down")
        this.y += 1
      else if(this.dir == "left")
        this.x -= 1

        //So the whole body moves (== tail values changes)
      this.tail[0]=[this.x, this.y]
      for(let i = this.tail.length - 1; i > 0; i--)
      {
        this.tail[i] = this.tail[i-1]
      }

    } 
    setDir(dir)
    {
      if(this.dir == "right" && dir == "left") return
      if(this.dir == "left" && dir == "right") return
      if(this.dir == "up" && dir == "down") return
      if(this.dir == "down" && dir == "up") return
      this.dir = dir
    }

    snakeAtPosition(x, y) {
      for (let i = 0; i < this.tail.length; i++) {
          if (this.tail[i][0] == x && this.tail[i][1] == y) {
            print("At Position")
              return true;
          }
      }
      return false;
  }
}
