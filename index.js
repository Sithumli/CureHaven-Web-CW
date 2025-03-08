function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.getElementById("nav-links");
    nav.classList.toggle("active");
    hamburger.classList.toggle('active');
}



function openOverlay1() {
    document.getElementById("overlay1").style.display = "block";
}

function openOverlay2() {
    document.getElementById("overlay2").style.display = "block";
}

function openOverlay3() {
    document.getElementById("overlay3").style.display = "block";
}

function openOverlay4() {
    document.getElementById("overlay4").style.display = "block";
}

function openOverlay5() {
    document.getElementById("overlay5").style.display = "block";
}

function openOverlay6() {
    document.getElementById("overlay6").style.display = "block";
}

// Function to close specific overlays
function closeOverlay(event) {
    if (event) event.stopPropagation(); // Prevent event bubbling

    // Close all overlays
    document.getElementById("overlay1").style.display = "none";
    document.getElementById("overlay2").style.display = "none";
    document.getElementById("overlay3").style.display = "none";
    document.getElementById("overlay4").style.display = "none";
    document.getElementById("overlay5").style.display = "none";
    document.getElementById("overlay6").style.display = "none";
}
