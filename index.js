// Data em que vocês começaram a ficar
const startDate = new Date("March 5, 2025 00:00:00").getTime();

function updateTimeTogether() {
    const now = new Date().getTime();
    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
}

setInterval(updateTimeTogether, 1000);
updateTimeTogether();

const cardContainer = document.querySelector('.container-card');
const items = document.querySelectorAll('.container-card .item');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const visibleCards = 3;
let currentIndex = 0;

function updateCarousel() {
    const cardWidth = items[0].getBoundingClientRect().width + 30; // largura + margem
    cardContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    prevBtn.disabled = currentIndex == 0;
    nextBtn.disabled = currentIndex >= items.length - visibleCards;
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < items.length - visibleCards) {
        currentIndex++;
        updateCarousel();
    }
});

window.addEventListener('resize', updateCarousel);
updateCarousel();