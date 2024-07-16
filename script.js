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
        createEnemies(2, 6)
        enemyInterval = setInterval(createEnemyLaser, 1000)
        requestAnimationFrame(update)
        startTimer()
    }
}

newGame()

window.pauseGame = () => {
    window.pause = !window.pause
    if (window.pause) {
        clearInterval(enemyInterval)
        freezeLasers()
        freezeTimer()
        document.getElementById("pause-button").innerText = "Continue"
    } else {
        enemyInterval = setInterval(createEnemyLaser, 1000)
        resumeLasers()
        resumeTimer()
        document.getElementById("pause-button").innerText = "Pause"
    }
}