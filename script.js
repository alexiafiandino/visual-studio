document.addEventListener('DOMContentLoaded', () => {
    const link = document.getElementById('transition-link');
    const waveOverlay = document.getElementById('wave-overlay');

    if (link && waveOverlay) {
        link.addEventListener('click', (e) => {
            // Empêche la navigation immédiate
            e.preventDefault();
            
            const targetUrl = link.getAttribute('href');

            // Active l'animation de la vague (mouvement de gauche à droite)
            waveOverlay.classList.add('active');

            // Attend la fin de l'animation pour changer de page
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 800);
        });
    }
});