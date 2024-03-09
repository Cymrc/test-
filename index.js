document.addEventListener("DOMContentLoaded", function() {
    const linkedinButton = document.querySelector(".social-icons .bi-linkedin");
    const githubButton = document.querySelector(".social-icons .bi-github");
    const contactForm = document.getElementById("contactForm");
    const aboutButton = document.querySelector('a[href="#aboutSection"]');
    const projectsButton = document.querySelector('a[href="#projectsSection"]');
    const contactButton = document.querySelector('a[href="#contactSection"]');
    const aboutSection = document.getElementById("aboutSection");
    const projectsSection = document.getElementById("projectsSection");
    const contactSection = document.getElementById("contactSection");

    linkedinButton.addEventListener("click", function() {
        window.open("https://www.linkedin.com/in/your-linkedin-profile-url", "_blank");
    });

    githubButton.addEventListener("click", function() {
        window.open("https://github.com/your-github-profile-url", "_blank");
    });

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
        contactForm.reset();
    });

    aboutButton.addEventListener("click", function(event) {
        event.preventDefault();
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });

    projectsButton.addEventListener("click", function(event) {
        event.preventDefault();
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    });

    contactButton.addEventListener("click", function(event) {
        event.preventDefault();
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});
