import { createEnemyLaser } from './model/enemyLasers.js'
import { createEnemies } from './model/enemies.js'
import { spaceshipMovement } from './controller/spaceship.js'
import { startTimer } from './controller/scoreboard.js'

function update() {
    spaceshipMovement()
    createEnemyLaser()
}

window.startGame = ()=> {
    document.getElementById('main-menu').style.display = 'none'
    createEnemies(2, 6)
    setInterval(createEnemyLaser, 1000) 
    requestAnimationFrame(update)
    startTimer();
}


