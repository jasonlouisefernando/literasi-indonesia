document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Progress Bar
    const progressBar = document.getElementById("progress-bar");
    window.addEventListener("scroll", function() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + "%";
    });

    // Pop-up Notification
    const popupNotification = document.getElementById("popup-notification");
    window.showPopup = function(message) {
        popupNotification.innerText = message;
        popupNotification.classList.add("show");
        setTimeout(() => {
            popupNotification.classList.remove("show");
        }, 3000);
    };
});