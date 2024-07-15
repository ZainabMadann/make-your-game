import { gameOver } from './gameover.js'

let initialTime
let lives = 3
let score = 0

let offaudio = new Audio('../view/off.mp3')
let cjaudio = new Audio('../view/cj.mp3')

export function updateTimer() {
    var elapsed = new Date() - initialTime
    var remainingTime = Math.max(0, 1000 * 60 * 1 - elapsed)
    document.getElementById('timer').innerHTML = formatTime(remainingTime)
    if (remainingTime > 0) {
        setTimeout(updateTimer, 1000 - (elapsed % 1000))
    } else {
        gameOver();
    }
}

export function formatTime(ms) {
    var totalSeconds = Math.floor(ms / 1000)
    var minutes = Math.floor(totalSeconds / 60)
    var seconds = totalSeconds % 60
    return `Time: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}` 
}

export function startTimer() {
    initialTime = new Date();
    setTimeout(updateTimer, 500)
}

export function updateLives() {
    document.getElementById('lives').innerText = `Lives: ${lives}`
}

export function decreaseLives() {
    lives--
    updateLives()
    if (lives <= 0) {
        cjaudio.play()
        gameOver()
        return
    }
    offaudio.play()
}


export function increaseScore() {
    score += 50;
    updatescore()
}

export function updatescore() {
    document.getElementById('score').innerText = `Score: ${score}`
}