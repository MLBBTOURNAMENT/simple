document.addEventListener("DOMContentLoaded", function() {
    // Animasi saat halaman dimuat
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(20px)";
        setTimeout(() => {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
            section.style.transition = "all 0.5s ease";
        }, 300);
    });
});