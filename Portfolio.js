document.addEventListener("DOMContentLoaded", () => {
  // Typing effect
  const roles = ["Frontend Developer", "Software Engineer", "Web Designer", "Full Stack Developer","React"];
  let roleIndex = 0, charIndex = 0, isDeleting = false;
  const typingElement = document.querySelector(".typing-text span");

  function typeEffect() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex--);
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex++);
    }
    let speed = isDeleting ? 100 : 200;
    if (!isDeleting && charIndex === currentRole.length + 1) {
      speed = 1500;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      speed = 500;
    }
    setTimeout(typeEffect, speed);
  }
  typeEffect();

  // Smooth scroll
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
      if (this.getAttribute("href").startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Contact form validation
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
      }
      alert(`Thank you, ${name}! Your message has been sent.`);
      contactForm.reset();
    });
  }
});