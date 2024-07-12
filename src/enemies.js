
// export function createEnemies(rows, cols) {
//     const container = document.createElement('div');
//     container.classList.add('enemy-container');
//     document.body.appendChild(container);

//     for (let i = 0; i < rows * cols; i++) {
//         const enemy = document.createElement('img');
//         enemy.src = 'img/ufo.png';
//         enemy.classList.add('enemy');
//         enemy.style.height = '70px';
//         enemy.style.width = '70px';
//         enemy.style.margin = '0'; 
//         enemy.style.padding = '0'; 
        
//         container.appendChild(enemy);
//     }

//     container.style.display = 'grid';
//     container.style.gridTemplateColumns = `repeat(${cols}, 80px)`; 
//     container.style.gridAutoRows = '80px'; 
//     container.style.gap = '3px'; 
//     container.style.margin = '0'; 
//     container.style.padding = '0'; 
// }
// createEnemies(2, 6);

// setInterval(createEnemyLaser, 1000);
