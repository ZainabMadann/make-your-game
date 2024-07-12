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

export function detectCollision(laser, enemy) {
    for (let i = 0; i < enemy.length; i++) {
        if (isCollision(laser, enemy[i])) {
            alert("Collision detected!")
            break
        }
    }
}
