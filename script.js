document.addEventListener('DOMContentLoaded', () => {
    const balloonContainer = document.getElementById('balloons-container');
    const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    const backgroundMusic = document.getElementById('background-music');
    const celebrateButton = document.getElementById('celebrate-button');

    // Create Balloons
    for (let i = 0; i < 10; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon', colors[Math.floor(Math.random() * colors.length)]);
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.animationDuration = `${5 + Math.random() * 5}s`;
        balloon.addEventListener('mouseover', () => balloon.style.transform = 'scale(1.2)');
        balloon.addEventListener('mouseout', () => balloon.style.transform = 'scale(1)');
        balloon.addEventListener('click', popBalloon);
        balloonContainer.appendChild(balloon);
    }

    // Create Confetti
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.width = `${Math.random() * 7 + 5}px`;
        confetti.style.height = confetti.style.width;
        document.body.appendChild(confetti);
    }

    // Start background music
    backgroundMusic.play();

    // Fireworks Effect
    celebrateButton.addEventListener('click', () => {
        for (let i = 0; i < 10; i++) {
            createFirework();
        }
    });

    // Function to create fireworks
    function createFirework() {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = `${Math.random() * 100}vw`;
        firework.style.top = `${Math.random() * 50}vh`;
        document.body.appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 1000);
    }

    // Function to "pop" a balloon
    function popBalloon(event) {
        const balloon = event.target;
        balloon.style.transition = 'transform 0.2s ease-out';
        balloon.style.transform = 'scale(0)';
        setTimeout(() => {
            balloon.remove();
        }, 200);
    }
});

