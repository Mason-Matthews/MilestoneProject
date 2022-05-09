import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

//apple location, snake growth rate and score variables
let apple = getRandomApplePosition()
const GROWTH_RATE = 3
export let score = 0;

//function to update the length of the snake and apple location
export function update() {
  if (onSnake(apple)) {
    expandSnake(GROWTH_RATE)
    apple = getRandomApplePosition()
    score += 1;
  }
}

//function to draw the apple on the game board
export function draw(gameBoard) {
  const appleElement = document.createElement('div')
  appleElement.style.gridRowStart = apple.y
  appleElement.style.gridColumnStart = apple.x
  appleElement.classList.add('apple')
  gameBoard.appendChild(appleElement)
}

//function to randomly generate the apples location on the gane board
function getRandomApplePosition() {
  let newApplePosition
  while (newApplePosition == null || onSnake(newApplePosition)) {
    newApplePosition = randomGridPosition()
  }
  return newApplePosition
}