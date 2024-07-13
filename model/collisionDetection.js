export function isCollision(laser, enemy) {
    const laserRect = laser.getBoundingClientRect()
    const enemyRect = enemy.getBoundingClientRect()

    return !(
        laserRect.top > enemyRect.bottom ||
        laserRect.bottom < enemyRect.top ||
        laserRect.right < enemyRect.left ||
        laserRect.left > enemyRect.right
    )
}

export function detectCollision(laser, spaceship) {

    // Check for collision with spaceship
    spaceship = document.getElementById('spaceship')
    const laserRect = laser.getBoundingClientRect()
    const spaceshipRect = spaceship.getBoundingClientRect()

    if (
        laserRect.left < spaceshipRect.right &&
        laserRect.right > spaceshipRect.left &&
        laserRect.top < spaceshipRect.bottom &&
        laserRect.bottom > spaceshipRect.top
    ) {
        // spaceship.style.display = 'none' // Hide the spaceship
        alert('Game Over!') // Show an alert
        laser.remove()
        window.location.reload() // Reload the game and goes to the main menu
    }
}