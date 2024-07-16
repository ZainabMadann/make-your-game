let container = document.querySelector('.enemy-container')
const radius = 100
let angle = 0
const angularSpeed = 0.05 // to change the move speed

export function moveEnemies() {
    if (!container) {
        container = document.querySelector('.enemy-container')
    }

    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 3
    const containerX = centerX + radius * Math.cos(angle)
    const containerY = centerY + radius * Math.sin(angle)

    container.style.position = 'absolute'
    container.style.left = `${containerX}px`
    container.style.top = `${containerY}px`

    angle += angularSpeed
}