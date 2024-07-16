import { freezeTimer } from "../controller/scoreboard.js"
import { freezeLasers } from "./enemyLasers.js"
import { enemyInterval } from "../../script.js"

export function gameOver() {
    document.getElementById('game-over').style.visibility = 'visible'
    document.getElementById('restart-button').style.display = 'block'
	freezeLasers()
	freezeTimer()
	clearInterval(enemyInterval)
    
    window.restartGame = () => {
		document.getElementById('game-over').style.display = 'none'
		document.getElementById('restart-button').style.display = 'none'
    
		window.location.reload()
	}
}

export function victory() {
	document.getElementById('victory').style.visibility = 'visible'
	document.getElementById('restart-button').style.display = 'block'
	freezeLasers()
	freezeTimer()
	clearInterval(enemyInterval)
	
	window.restartGame = () => {
		document.getElementById('victory').style.display = 'none'
		document.getElementById('restart-button').style.display = 'none'
	
		window.location.reload()
	}
}