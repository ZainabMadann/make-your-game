import { freezeTimer } from "../controller/scoreboard.js"
import { freezeLasers } from "./enemyLasers.js"
import { enemyInterval, newGame } from "../../script.js"

export function gameOver() {
    document.getElementById('game-over').style.visibility = 'visible'
    document.getElementById('restart-button').style.display = 'block'
	document.getElementById("spaceship").style.display = "none"
    document.getElementById("scoreboard").style.display = "none"
	document.getElementsByClassName('enemy-container')[0].style.display = 'none'
	freezeLasers()
	freezeTimer()
	clearInterval(enemyInterval)
    
    window.restartGame = () => {
		document.getElementById('game-over').style.display = 'none'
		document.getElementById('restart-button').style.display = 'none'
    
		window.location.reload(true)
	}
}

export function victory() {
	document.getElementById('victory').style.visibility = 'visible'
	document.getElementById('restart-button').style.display = 'block'
	document.getElementById("spaceship").style.display = "none"
    document.getElementById("scoreboard").style.display = "none"
	document.getElementsByClassName('enemy-container')[0].style.display = 'none'
	freezeLasers()
	freezeTimer()
	clearInterval(enemyInterval)
	
	window.restartGame = () => {
		document.getElementById('restart-button').addEventListener('click', newGame);
		document.getElementById('victory').style.display = 'none'
		document.getElementById('restart-button').style.display = 'none'
	
		window.location.reload(true)

	}
}
