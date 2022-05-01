

let lastRenderTime = 0;


function main(currentTime){
    window.requestAnimationFrame(main);
    const secoundsSinceLastRender = (currentTime - lastRenderTime)/1000
    if(secoundsSinceLastRender < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime;

    update()
    draw(game_board)
}
function update(){

}
function draw(){
    
    drawSnake(game_board)
}


window.requestAnimationFrame(main)

