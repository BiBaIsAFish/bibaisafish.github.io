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

function loadMap() {
    var map = new maplibregl.Map({
        maxPitch: 85,
        container: 'map',
        style: 'https://service.polstarapis.com/mapstyle/default/style.json',
        center: [120.670521939486, 24.145019210011],
        zoom: 17,
        bearing: 0,
        pitch: 0,
        interactive: true
    })
    map.addControl(new maplibregl.NavigationControl({}))
    new maplibregl.Marker({ color: '#FF0000' }).setLngLat([120.670521939486, 24.145019210011]).addTo(map)
}
window.onload = function () {
    loadMap()
}