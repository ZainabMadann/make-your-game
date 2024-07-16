import { gameOver, victory } from '../model/gameover.js'

let initialTime
let lives = 3
let score = 0

let offaudio = new Audio('../view/off.mp3')
let cjaudio = new Audio('../view/cj.mp3')

let pauseStartTime
let totalPausedDuration = 0
let isTimerPaused = false

export function updateTimer() {
    if (isTimerPaused) return

    var elapsed = new Date() - initialTime
    var remainingTime = Math.max(0, 1000 * 60 * 1 - elapsed + totalPausedDuration)
    document.getElementById('timer').innerHTML = formatTime(remainingTime)
    if (remainingTime > 0) {
        setTimeout(updateTimer, 1000 - (elapsed % 1000))
    } else {
        gameOver()
    }
}

export function formatTime(ms) {
    var totalSeconds = Math.floor(ms / 1000)
    var minutes = Math.floor(totalSeconds / 60)
    var seconds = totalSeconds % 60
    return `Time: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}

export function startTimer() {
    initialTime = new Date()
    totalPausedDuration = 0
    setTimeout(updateTimer, 500)
}

export const freezeTimer = () => (isTimerPaused = true, pauseStartTime = new Date())

export const resumeTimer = () => {
    if (isTimerPaused) {
        let currentPauseDuration = new Date() - pauseStartTime
        totalPausedDuration += currentPauseDuration
    }
    isTimerPaused = false
    updateTimer()
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
    score += 50
    if (score == 600) {
        victory()
        return
    }
    updatescore()
}

export function updatescore() {
    document.getElementById('score').innerText = `Score: ${score}`
}
