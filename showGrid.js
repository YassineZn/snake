function showGrid()
{
    for(let i = 0; i < len; i++)
        {
            for(let j = 0; j < len; j++)
            {
                textAlign(CENTER, CENTER);
                textSize(100)
                fill(45)
                text("AI will be avialble soon(PC only)", windowWidth/2, windowHeight/2)
                fill(20, 20 ,20)
                rectMode(CORNER)
                noStroke()
                rect(j*w, i*w, w, w )
            }
        }
}