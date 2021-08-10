class Food{
    constructor()
    {
        do{
            this.x = Math.floor(random(1, (len-1)))
            this.y = Math.floor(random(1, (windowHeight/w)-1))
        }while(snake.snakeAtPosition(this.x, this.y))
    }
    show()
    {
        fill(0, 150, 0)
        circle(this.x *w , this.y * w, 40 )
    }
}