
export function createEnemyLaser() {
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
