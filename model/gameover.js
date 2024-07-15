export function gameOver() {
    document.getElementById('game-over').style.visibility = 'visible'
    document.getElementById('restart-button').style.display = 'block'
    
    window.restartGame = () => {
		document.getElementById('game-over').style.display = 'none'
		document.getElementById('restart-button').style.display = 'none'
    
		window.location.reload()
	}
}