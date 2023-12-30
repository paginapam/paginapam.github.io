const stars = document.getElementById('stars');

for (let i = 0; i < 4500; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.left = Math.random() * window.innerWidth + 'px';
    stars.appendChild(star);
}

for (let i = 0; i < 10; i++) {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    shootingStar.style.top = Math.random() * window.innerHeight + 'px';
    shootingStar.style.left = Math.random() * window.innerWidth + 'px';
    stars.appendChild(shootingStar);
}