function showTab(index) {
    // Select all tabs and cards
    const tabs = document.querySelectorAll('.tab');
    const cards = document.querySelectorAll('.content-card');

    // Desactivar todas las tarjetas y tabs
    cards.forEach(card => {
        card.classList.remove('active');
        // Reset scroll within card if any
        card.scrollTop = 0;
    });
    tabs.forEach(tab => tab.classList.remove('active'));

    // Activar tarjeta y tab correspondiente
    // Usamos un pequeño delay para que el navegador reinicie el ciclo de animación
    requestAnimationFrame(() => {
        cards[index].classList.add('active');
        tabs[index].classList.add('active');
    });

    // Scroll to top of card if on mobile
    if (window.innerWidth < 768) {
        cards[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Initialize reveal-on-scroll logic (optional but adds premium feel)
document.addEventListener('DOMContentLoaded', () => {
    console.log("TIC Presentations Loaded Successfully");
    
    // Add micro-interactions to tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('mouseenter', () => {
            if (!tab.classList.contains('active')) {
                tab.style.transform = 'translateY(-2px)';
            }
        });
        tab.addEventListener('mouseleave', () => {
            tab.style.transform = 'translateY(0)';
        });
    });
});
