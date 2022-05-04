const SNAKE_SPEED = 15;
const snakeBody = [
    {x:11, y:11}]

function update(){
    const inputDirection = getInputDirection();
    for(let i = snakeBody.length-2;i >=0; i--){
        snakeBody[i+1] = {... snakeBody[i]}
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}
function draw(game_board){
    game_board.innerHTML = '';
    snakeBody.forEach(segment =>{
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake')
        game_board.appendChild(snakeElement)
    })
}