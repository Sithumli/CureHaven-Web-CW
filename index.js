function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.getElementById("nav-links");
    nav.classList.toggle("active");
    hamburger.classList.toggle('active');
}