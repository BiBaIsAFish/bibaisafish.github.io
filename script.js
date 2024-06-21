// JavaScript for handling header visibility on scroll
let lastScrollY = window.scrollY;
const header = document.getElementById('header');

window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        // 往下滾
        header.style.top = "-75px";
        document.getElementById("empty").classList.add('hidden');
    } else if (event.deltaY < 0) {
        // 往上滾
        header.style.top = "0";
        document.getElementById("empty").classList.remove('hidden');
    }
})

// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById("empty").classList.add('hidden');
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - header.offsetHeight,
            behavior: 'smooth'
        });
        header.style.top = "-85px";
    });
});

document.getElementById("home").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});