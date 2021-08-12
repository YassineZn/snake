function showGrid()
{
    for(let i = 0; i < len; i++)
        {
            for(let j = 0; j < len; j++)
            {
                textAlign(CENTER, CENTER);
                textSize(50)
                fill(45)
                textFont("sans-serif")
                text("AI will be available soon(PC only)", windowWidth/2, windowHeight/2)
                
                fill(20, 20 ,20)
                rectMode(CORNER)
                noStroke()
                rect(j*w, i*w, w, w )
            }
        }
}