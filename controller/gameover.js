import {newGame} from '../script.js'

export function gameOver() {
    document.getElementById('game-over').style.visibility = 'visible'
    document.getElementById('restart-button').style.display = 'block'
    
    window.restartGame = () => {
		document.getElementById('game-over').style.visibility = 'hidden'
		document.getElementById('restart-button').style.display = 'none'
		
    newGame()
	}
}