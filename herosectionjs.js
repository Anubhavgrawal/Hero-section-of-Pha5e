document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project");
    const heroHeading = document.querySelector(".hero-heading");

    projects.forEach((project) => {
        const img = project.querySelector("img");

        project.addEventListener("mouseenter", () => {
           
            img.style.zIndex = "100";
            img.style.transition = "transform 0.1s ease-out";

            
            projects.forEach((p) => {
                if (p !== project) {
                    p.style.filter = "grayscale(100%) contrast(0.2)";
                }
            });

            
            heroHeading.style.color = "transparent";
            heroHeading.style.webkitTextStroke = "1px rgba(255, 255, 255, 0.3)";
        });

        project.addEventListener("mousemove", (e) => {
            const { left, top, width, height } = project.getBoundingClientRect();
            const x = (e.clientX - left - width / 2) * 0.3; 
            const y = (e.clientY - top - height / 2) * 0.3; 

            img.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
        });

        project.addEventListener("mouseleave", () => {
            
            projects.forEach((p) => p.style.filter = "none");
            heroHeading.style.color = "white";
            heroHeading.style.webkitTextStroke = "none";

            img.style.transform = "translate(0, 0) scale(1)";
            img.style.zIndex = "1"; 
        });
    });
});
