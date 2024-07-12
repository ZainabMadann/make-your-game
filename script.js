import { createSpaceshipLaser } from './controller/spaceshipLaser.js'
import { createEnemyLaser } from './model/enemyLasers.js'
import { createEnemies } from './model/enemies.js'
import { spaceshipMovement } from './controller/spaceship.js'

function update() {
    spaceshipMovement()
    createEnemyLaser()
}

document.getElementById('start-button').addEventListener('click', function () {
    document.getElementById('main-menu').style.display = 'none'
    createEnemies(2, 6)
    setInterval(createEnemyLaser, 1000)
    requestAnimationFrame(update)
})
requestAnimationFrame(createSpaceshipLaser)
