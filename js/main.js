document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked (optional)
    const navItems = document.querySelectorAll('.nav-links li a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
});

(function () {
  emailjs.init("d7Pi9hCT0Q9L52bGW");
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_r28flh1",
    "template_j1pr65e",
    this
  ).then(
    function () {
      alert("Message sent successfully!");
      document.getElementById("contactForm").reset();
    },
    function (error) {
      alert("Submission failed. Please try again.");
      console.error(error);
    }
  );
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  emailjs.init("d7Pi9hCT0Q9L52bGW");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_r28flh1",
      "template_j1pr65e",
      this
    ).then(
      () => {
        alert("Message sent successfully!");
        form.reset();
      },
      (error) => {
        alert("Submission failed. Please try again.");
        console.error("EmailJS error:", error);
      }
    );
  });
});
