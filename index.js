function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.getElementById("nav-links");
    nav.classList.toggle("active");
    hamburger.classList.toggle('active');
}

const progressBar = document.querySelector('.progress-bar');
        const loadingPercentage = document.querySelector('.loading-percentage');

        let percentage = 0;
        const interval = setInterval(() => {
            percentage += 1; 
            loadingPercentage.textContent = `${percentage}%`; 
            progressBar.style.width = `${percentage}%`; 

            console.log(loadingPercentage.textContent); 

            if (percentage >= 100) {
                clearInterval(interval); 
            }
        }, 30); 