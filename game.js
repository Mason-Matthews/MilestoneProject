import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateApple, draw as drawApple, score } from './Apple.js'
import { outsideGrid } from './grid.js'

//variables for game speed, game over and game board 
let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')


//main function to control playing the game, checking for gameover, and updating/drawing objects
function main(currentTime) {
  if (gameOver) {
    if (confirm('You lost. Your score was: ' + score + '! Press ok to restart.')) {
      window.location = '/'
    }
    return
  }
    
  window.requestAnimationFrame(main)

  //"tick" speed 
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

  lastRenderTime = currentTime

  update()
  draw()
}
//loop to run the game
window.requestAnimationFrame(main)

//function to update objects
function update() {
  updateSnake()
  updateApple()
  checkDeath()
}

//function to draw objects
function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawApple(gameBoard)
}

//function to check death
function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

