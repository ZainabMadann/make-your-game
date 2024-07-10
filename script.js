document.addEventListener('keydown', function (event) {
    const spaceship = document.getElementById('spaceship');
    let leftPosition = parseInt(spaceship.style.left, 10);
    const spaceshipWidth = spaceship.offsetWidth;
    const windowWidth = window.innerWidth;

    if (event.key === 'ArrowLeft') {
        leftPosition -= 10;
        if (leftPosition < 0) {
            leftPosition = 0;
        }
        spaceship.style.left = leftPosition + 'px';
    } else if (event.key === 'ArrowRight') {
        leftPosition += 10;
        if (leftPosition > windowWidth - spaceshipWidth) {
            leftPosition = windowWidth - spaceshipWidth;
        }
        spaceship.style.left = leftPosition + 'px';
    }
});

function createEnemyLaser() {
    console.log('I am here');
    const enemyLaser = document.createElement('img');
    enemyLaser.src = 'img/enemyLaser.png';
    enemyLaser.style.height = '20px';
    enemyLaser.classList.add('enemyLaser');

    const windowWidth = window.innerWidth;
    const laserWidth = 10;
    const randomLeft = Math.random() * (windowWidth - laserWidth);

    enemyLaser.style.position = 'absolute'; 
    enemyLaser.style.left = `${randomLeft}px`;
    enemyLaser.style.top = '0px'; // Starting position

    document.body.appendChild(enemyLaser);

    let topPosition = parseInt(enemyLaser.style.top, 10);

    function moveLaser() {
        console.log('Moving laser');
        
        topPosition += 10; 
        enemyLaser.style.top = `${topPosition}px`; 

        if (topPosition > window.innerHeight) {
            enemyLaser.remove(); 
            clearInterval(movementInterval); 
        }
    }

    const movementInterval = setInterval(moveLaser, 50);
}

function createEnemies(rows, cols) {
    const container = document.createElement('div');
    container.classList.add('enemy-container');
    document.body.appendChild(container);

    for (let i = 0; i < rows * cols; i++) {
        const enemy = document.createElement('img');
        enemy.src = 'img/ufo.png';
        enemy.classList.add('enemy');
        enemy.style.height = '70px';
        enemy.style.width = '70px';
        enemy.style.margin = '0'; 
        enemy.style.padding = '0'; 
        
        container.appendChild(enemy);
    }

    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${cols}, 80px)`; 
    container.style.gridAutoRows = '80px'; 
    container.style.gap = '3px'; 
    container.style.margin = '0'; 
    container.style.padding = '0'; 
}
createEnemies(2, 6);

setInterval(createEnemyLaser, 1000);
