import { createEnemyLaser } from "./model/enemyLasers.js"
import { createEnemies } from "./model/enemies.js"
import { spaceshipMovement } from "./controller/spaceship.js"
import { freezeTimer, resumeTimer, startTimer } from "./controller/scoreboard.js"
import { moveEnemies } from "./model/enemiesMovement.js"
import { freezeLasers } from "./model/enemyLasers.js"
import { resumeLasers } from "./model/enemyLasers.js"

window.pause = false
export let enemyInterval = 0

function update() {
    if (!window.pause) {
        moveEnemies()
        spaceshipMovement()
    }
    requestAnimationFrame(update)
}

export function newGame() {
    window.startGame = () => {
        document.getElementById("main-menu").style.display = "none"
        document.getElementById("spaceship").style.visibility = "visible"
        document.getElementById("scoreboard").style.visibility = "visible"
        createEnemies(2, 6)
        enemyInterval = setInterval(createEnemyLaser, 1000)
        requestAnimationFrame(update)
        startTimer()
    }
}

newGame()

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'p') {
        pauseGame()
    } else if (e.key === 'r') {
        restartGame()
    }
})

window.pauseGame = () => {
    window.pause = !window.pause
    if (window.pause) {
        clearInterval(enemyInterval)
        freezeLasers()
        freezeTimer()
        document.getElementById("pause-button").innerText = "Continue"
        document.getElementById("restart").style.visibility = "visible"
        window.restartGame = () => {
            window.location.reload(true)
        }
    } else {
        enemyInterval = setInterval(createEnemyLaser, 1000)
        resumeLasers()
        resumeTimer()
        document.getElementById("pause-button").innerText = "Pause"
    }
}

