import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let apple = getRandomApplePosition()
const GROWTH_RATE = 5

export function update() {
  if (onSnake(apple)) {
    expandSnake(GROWTH_RATE)
    apple = getRandomApplePosition()
  }
}

export function draw(gameBoard) {
  const appleElement = document.createElement('div')
  appleElement.style.gridRowStart = apple.y
  appleElement.style.gridColumnStart = apple.x
  appleElement.classList.add('apple')
  gameBoard.appendChild(appleElement)
}

function getRandomApplePosition() {
  let newApplePosition
  while (newApplePosition == null || onSnake(newApplePosition)) {
    newApplePosition = randomGridPosition()
  }
  return newApplePosition
}