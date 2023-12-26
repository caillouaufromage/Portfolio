/* JAVASCRIPT DES EFFETS DU CURSEUR */

document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

document.addEventListener('mouseenter', () => {
    const cursor = document.getElementById('cursor');
    cursor.classList.add('glow');
});

document.addEventListener('mouseleave', () => {
    const cursor = document.getElementById('cursor');
    cursor.classList.remove('glow');
});