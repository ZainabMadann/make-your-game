import { isCollision } from '../model/collisionDetection.js'

export function createSpaceshipLaser() {
    const spaceship = document.getElementById('spaceship')
    const spaceshipRect = spaceship.getBoundingClientRect()

    const spaceshipLaser = document.createElement('img')
    spaceshipLaser.src = 'view/img/laser.png'
    spaceshipLaser.style.height = '20px'
    spaceshipLaser.classList.add('spaceshipLaser')

    spaceshipLaser.style.position = 'absolute'
    spaceshipLaser.style.left = `${spaceshipRect.left + spaceshipRect.width / 2}px`
    spaceshipLaser.style.top = `${spaceshipRect.top - 20}px`

    document.body.appendChild(spaceshipLaser)

    let topPosition = parseInt(spaceshipLaser.style.top, 10)

    function moveLaser() {
        topPosition -= 10
        spaceshipLaser.style.top = `${topPosition}px`

        if (topPosition < 0) {
            spaceshipLaser.remove()
            clearInterval(movementInterval)
        } else {
            const enemies = document.querySelectorAll('.enemy')
            enemies.forEach(enemy => {
                if (isCollision(spaceshipLaser, enemy)) {
                    // replaced dead enemy image ### might fix this later
                    enemy.src = 'view/img/dead-enemy.png'
                    spaceshipLaser.remove()
                    enemy.classList.remove('enemy')
                    clearInterval(movementInterval)
                }
            })
        }
    }

    const movementInterval = setInterval(moveLaser, 5)
}
