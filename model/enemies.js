export function createEnemies(rows, cols) {
    const container = document.createElement('div');
    container.classList.add('enemy-container');
    document.body.appendChild(container);

    for (let i = 0; i < rows * cols; i++) {
        const enemy = document.createElement('img');
        enemy.src = 'view/img/ufo.png';
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
