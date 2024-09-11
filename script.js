function createWaves() {
    const container = document.querySelector('.wave-container');
    for (let i = 0; i < 5; i++) {
        const wave = document.createElement('div');
        wave.classList.add('wave');
        wave.style.animationDelay = `${i * 0.4}s`;
        container.appendChild(wave);
    }
}

document.addEventListener('DOMContentLoaded', createWaves);


