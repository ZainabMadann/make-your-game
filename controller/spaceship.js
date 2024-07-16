import { createSpaceshipLaser } from './spaceshipLaser.js'

export const keys = {
    right: false,
    left: false,
    up: false
};

const spaceship = document.getElementById('spaceship')
const spaceshipWidth = spaceship.offsetWidth
const windowWidth = window.innerWidth
let leftPosition = spaceship.offsetLeft
let speed = 5

function setupControls() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'd') keys.right = true;
        if (e.key === 'ArrowLeft' || e.key === 'a') keys.left = true;
        if (e.key === 'ArrowUp' || e.key === 'w' || e.key === ' ') keys.up = true
    });

    document.addEventListener('keyup', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'd') keys.right = false
        if (e.key === 'ArrowLeft' || e.key === 'a') keys.left = false
        if (e.key === 'ArrowUp' || e.key === 'w' || e.key === ' ') {
            keys.up = false
        }
    });

    document.addEventListener('keydown', (e) => {
        if (!(e.key === 'ArrowRight' || e.key === 'd' || e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'ArrowUp' || e.key === 'w' || e.key === ' ')) {
            e.preventDefault()
            return false
        }
    });
}

function createSpaceship(e) {
    if (!window.pause && (keys.up || keys.right || keys.left) && !e.repeat && (e.key === 'ArrowUp' || e.key === 'w' || e.key === ' ')) {
        createSpaceshipLaser()
    }
}

export function moveSpaceship() {
    if (keys.left) {
        leftPosition -= speed
        if (leftPosition < 0) {
            leftPosition = 0
        }
    } else if (keys.right) {
        leftPosition += speed;
        if (leftPosition > windowWidth - spaceshipWidth) {
            leftPosition = windowWidth - spaceshipWidth
        }
    }
    spaceship.style.left = leftPosition + 'px'
}

export function spaceshipMovement() {
    if (!window.controlsSet) {
        setupControls()
        window.controlsSet = true
        document.addEventListener('keydown', createSpaceship)
    }
    moveSpaceship()
}
