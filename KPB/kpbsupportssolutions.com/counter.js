const startDate = new Date('2024-02-17');
let animationsStarted = false;

function animateValue(element, start, end, duration) {
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        element.textContent = current;
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}

function updateExperience() {
    const now = new Date();
    const diff = now - startDate;

    const years = Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));
    const months = Math.floor((diff % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    const days = Math.floor((diff % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
    const hours = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((diff % (60 * 1000)) / 1000);

    document.getElementById('experience').textContent = `${years}y ${months}m ${days}d`;
    document.getElementById('experience-details').textContent = 
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            if (!animationsStarted) {
                const numbersElements = document.querySelectorAll('.number[data-target]');
                numbersElements.forEach(element => {
                    const target = parseInt(element.dataset.target);
                    animateValue(element, 0, target, 2000);
                });
                animationsStarted = true;
            }
        }
    });
}, { threshold: 0.1 });

// Observe all stat boxes
document.querySelectorAll('.stat-box').forEach((box, index) => {
    setTimeout(() => {
        observer.observe(box);
    }, index * 200);
});

// Experience counter
setInterval(updateExperience, 1000);
updateExperience();

// Customer increment (4 per day)
setInterval(() => {
    const element = document.getElementById('customers');
    const currentValue = parseInt(element.textContent);
    animateValue(element, currentValue, currentValue + 1, 1000);
}, 21600000);

// Expert increment (1 per day)
setInterval(() => {
    const element = document.getElementById('experts');
    const currentValue = parseInt(element.textContent);
    animateValue(element, currentValue, currentValue + 1, 1000);
}, 86400000);
