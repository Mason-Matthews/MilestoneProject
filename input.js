let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

//loop to check key stroke events
window.addEventListener('keydown', e => {
  switch (e.key) {
    case 'w':
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: -1 }
      document.querySelector(".snake").src = "./assets/snakeHeadUp.png";
      
      break
    case 's':
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: 1 }
      break
    case 'a':
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: -1, y: 0 }
      break
    case 'd':
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: 1, y: 0 }
      break
  }
})

//function to get snake direction
export function getInputDirection() {
  lastInputDirection = inputDirection
  return inputDirection
}