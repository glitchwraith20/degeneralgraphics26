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

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  // 🚨 Guard clause
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    };

    try {
      const res = await fetch("YOUR_ENDPOINT_URL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        alert("Message sent successfully 🚀");
        form.reset();
      } else {
        alert("Submission failed. Try again.");
      }
    } catch (error) {
      alert("Network error. Please try later.");
    }
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
