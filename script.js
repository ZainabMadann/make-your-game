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

