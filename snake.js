import { getInputDirection } from "./input.js"

//vars for snake speed, snake head and rest of the body
export const SNAKE_SPEED = 8
const snakeBody = [{ x: 11, y: 11 }]
let newSegments = 0

//function to update snake length and direction
export function update() {
  addSegments()

  const inputDirection = getInputDirection()
  //loop through the snake body objects
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] }
  }

  snakeBody[0].x += inputDirection.x
  snakeBody[0].y += inputDirection.y
}
//function to draw the snake to the gameboard
export function draw(gameBoard) {
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segment.y
    snakeElement.style.gridColumnStart = segment.x
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)
  })
}
//function to add to the snake length
export function expandSnake(amount) {
  newSegments += amount
}
//function to check the position of the head of the snake
export function onSnake(position, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false
    return equalPositions(segment, position)
  })
}
//function to get the location of the snakes head
export function getSnakeHead() {
  return snakeBody[0]
}
//function to check snake head to tail collision 
export function snakeIntersection() {
  return onSnake(snakeBody[0], { ignoreHead: true })
}
//function to compare the location of two objects
function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y
}
//function to add segments to the snake body
function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
  }
  
  newSegments = 0
}

