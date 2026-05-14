console.log("Script loaded");

// Add active class to the current nav item
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Initialize EmailJS with your Public Key
emailjs.init("-aA8rdusOitzlwwto");

  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form from refreshing the page
    // Collect form values
    const name = this.querySelector('input[placeholder="Your Name"]').value.trim();
    const email = this.querySelector('input[placeholder="Your Email"]').value.trim();
    const title = this.querySelector('input[placeholder="Subject"]').value.trim();
    const message = this.querySelector('textarea').value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    const templateParams = {
      name: name,
      email: email,
      title: title || "No Subject",
      message: message,
    };

    // Send email using EmailJS
    emailjs.send("service_ithl1jf", "template_npuuqxr", templateParams)
      .then(function(response) {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset(); // Clear form
      }, function(error) {
        console.error("Failed to send message:", error);
        alert("Something went wrong. Please try again later.");
      });
  });