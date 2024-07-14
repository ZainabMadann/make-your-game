import { createSpaceshipLaser } from './controller/spaceshipLaser.js'
import { createEnemyLaser } from './model/enemyLasers.js'
import { createEnemies } from './model/enemies.js'
import { spaceshipMovement } from './controller/spaceship.js'

function update() {
    spaceshipMovement()
    createEnemyLaser()
}

var initialTime = new Date()
function updateTimer() {
    var elapsed = new Date() - initialTime
    var remainingTime = Math.max(0, 1000 * 60 * 1 - elapsed);
    document.getElementById('timer').innerHTML = formatTime(remainingTime)
    if (remainingTime > 0) {
        setTimeout(updateTimer, 1000 - (elapsed % 1000))
    }
}

function formatTime(ms) {
    var totalSeconds = Math.floor(ms / 1000)
    var minutes = Math.floor(totalSeconds / 60)
    var seconds = totalSeconds % 60;
    return `Time: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}

// function countdown() {
//     secs = mins * 60;
//     Decrement();
// }

// function Decrement() {
//     if (document.getElementById) {
//         var minutes = document.getElementById("minutes");
//         var seconds = document.getElementById("seconds");

//         minutes.value = getminutes();
//         seconds.value = getseconds();
//         secs--;
        
//         if (secs >= 0) {
//             setTimeout(Decrement, 1000);
//         }
//     }
// }

// function getminutes() {
//     mins = Math.floor(secs / 60);
//     return mins;
// }

// function getseconds() {
//     return secs - Math.round(mins * 60);
// }


document.getElementById('start-button').addEventListener('click', function () {
    document.getElementById('main-menu').style.display = 'none'
    createEnemies(2, 6)
    setInterval(createEnemyLaser, 1000)
    requestAnimationFrame(update)
    initialTime = new Date()
    setTimeout(updateTimer,500)
    // timerInterval = setInterval(updateTimer, 1000); 
});

requestAnimationFrame(createSpaceshipLaser)
