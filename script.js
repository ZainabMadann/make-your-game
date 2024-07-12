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
    } else if (event.key === ' ') {
        createSpaceshipLaser();
    }
});

function createSpaceshipLaser() {
    const spaceship = document.getElementById('spaceship');
    const spaceshipRect = spaceship.getBoundingClientRect();

    const spaceshipLaser = document.createElement('img');
    spaceshipLaser.src = 'img/laser.png';
    spaceshipLaser.style.height = '20px';
    spaceshipLaser.classList.add('spaceshipLaser');

    spaceshipLaser.style.position = 'absolute';
    spaceshipLaser.style.left = `${spaceshipRect.left + spaceshipRect.width / 2 }px`;
    spaceshipLaser.style.top = `${spaceshipRect.top - 20}px`;

    document.body.appendChild(spaceshipLaser);

    let topPosition = parseInt(spaceshipLaser.style.top, 10);

    function moveLaser() {
        topPosition -= 10;
        spaceshipLaser.style.top = `${topPosition}px`;

        if (topPosition < 0) {
            spaceshipLaser.remove();
            clearInterval(movementInterval);
        } else {
            const enemies = document.querySelectorAll('.enemy');
            enemies.forEach(enemy => {
                if (isCollision(spaceshipLaser, enemy)) {
                    // const enemyId = enemy.getAttribute('id');
                    spaceshipLaser.remove();
                    // console.log('thhsssi is the id'+enemyId)
                    // let enemyy = document.getElementById(enemyId);
                    enemy.remove();
                    clearInterval(movementInterval);
                }
            });
        }
    }


    const movementInterval = setInterval(moveLaser, 5);
}

function isCollision(laser, enemy) {
    const laserRect = laser.getBoundingClientRect();
    const enemyRect = enemy.getBoundingClientRect();

    
    return !(
        laserRect.top > enemyRect.bottom ||
        laserRect.bottom < enemyRect.top ||
        laserRect.right < enemyRect.left ||
        laserRect.left > enemyRect.right
    );
}

function isCollisionSpaceship(laser, spaceship) {
    const laserRect = laser.getBoundingClientRect();
    const spaceshipRect = spaceship.getBoundingClientRect();

    return !(
        laserRect.top > spaceshipRect.bottom ||
        laserRect.bottom < spaceshipRect.top ||
        laserRect.right < spaceshipRect.left ||
        laserRect.left > spaceshipRect.right
    );
}

function createEnemyLaser() {
    const enemyLaser = document.createElement('img');
    enemyLaser.src = 'img/enemyLaser.png';
    enemyLaser.style.height = '20px';
    enemyLaser.classList.add('enemyLaser');

    const windowWidth = window.innerWidth;
    const laserWidth = 10;
    const randomLeft = Math.random() * (windowWidth - laserWidth);

    enemyLaser.style.position = 'absolute'; 
    enemyLaser.style.left = `${randomLeft}px`;
    enemyLaser.style.top = '0px'; 
    
    document.body.appendChild(enemyLaser);

    let topPosition = parseInt(enemyLaser.style.top, 10);

    function moveLaser() {
        topPosition += 10; 
        enemyLaser.style.top = `${topPosition}px`; 

        if (topPosition > window.innerHeight) {
            enemyLaser.remove(); 
            clearInterval(movementInterval); 
        }
        //  else {
        //     const spaceship = document.getElementById('spaceship');
        //     if (isCollisionSpaceship(enemyLaser, spaceship)) {
        //         alert('Game Over');
        //         enemyLaser.remove();
        //         clearInterval(movementInterval);
        //     }
        // }
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
        enemy.id = i;
        console.log(enemy.id)
        container.appendChild(enemy);
    }

    const containerWidth = cols * 80 + (cols - 1) * 3;
    const containerHeight = rows * 80 + (rows - 1) * 3;

    container.style.width = `${containerWidth}px`;
    container.style.height = `${containerHeight}px`;
}

createEnemies(2, 6);
setInterval(createEnemyLaser, 1000);


