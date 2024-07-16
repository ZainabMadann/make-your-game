import { detectCollision } from "./collisionDetection.js"

const activeLasers = []

export function createEnemyLaser() {
    const enemyLaser = document.createElement('img')
    enemyLaser.src = 'view/img/enemyLaser.png'
    enemyLaser.style.height = '20px'
    enemyLaser.classList.add('enemyLaser')

    const windowWidth = window.innerWidth
    const laserWidth = 10
    const randomLeft = Math.random() * (windowWidth - laserWidth)

    enemyLaser.style.position = 'absolute'
    enemyLaser.style.left = `${randomLeft}px`
    enemyLaser.style.top = '0px'
    
    document.body.insertBefore(enemyLaser, document.body.firstChild)
    let topPosition = parseInt(enemyLaser.style.top, 10)

    function moveLaser() {
        topPosition += 10
        enemyLaser.style.top = `${topPosition}px`

        detectCollision(enemyLaser, spaceship)

        if (topPosition > window.innerHeight) {
            enemyLaser.remove()
            clearInterval(movementInterval)
            activeLasers.splice(activeLasers.indexOf(movementInterval), 1)
        }
    }

    const movementInterval = setInterval(moveLaser, 50)
    activeLasers.push(movementInterval)
}

export function freezeLasers() {
    activeLasers.forEach(interval => clearInterval(interval))
}

export function resumeLasers() {
    document.querySelectorAll('.enemyLaser').forEach(enemyLaser => {
        let topPosition = parseInt(enemyLaser.style.top, 10)

        function moveLaser() {
            topPosition += 10
            enemyLaser.style.top = `${topPosition}px`

            detectCollision(enemyLaser, spaceship)

            if (topPosition > window.innerHeight) {
                enemyLaser.remove()
                clearInterval(movementInterval)
                activeLasers.splice(activeLasers.indexOf(movementInterval), 1)
            }
        }

        const movementInterval = setInterval(moveLaser, 50)
        activeLasers.push(movementInterval)
    })
}
