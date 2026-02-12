// Wait until full page loads
alert("js file linked successfully!")
document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     NAVBAR ACTIVE LINK
  =============================== */
  const navLinks = document.querySelectorAll(".navbar nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Login button
const loginBtn = document.querySelector(".login-btn");
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    alert("Login clicked! (Demo only)");
  });
}

// Signup button
const signupBtn = document.querySelector(".signup-btn");
if (signupBtn) {
  signupBtn.addEventListener("click", () => {
    alert("Sign Up clicked! (Demo only)");
  });
}

  /* ===============================
     SEARCH BUTTON (Safe Validation)
  =============================== */
  const searchBtn = document.querySelector(".search-box button");
  const locationInput = document.querySelector(".search-box input");
  const categorySelect = document.querySelector(".search-box select");

  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      if (locationInput.value.trim() === "") {
        alert("Please enter your location 😊");
        return;
      }
      alert(
        `Searching food in "${locationInput.value}" for "${categorySelect.value}"`
      );
    });
  }


  /* ===============================
     ORDER NOW BUTTON ACTION
  =============================== */
  const orderButtons = document.querySelectorAll(".card .btn");

  orderButtons.forEach(button => {
    button.addEventListener("click", () => {
      const foodName =
        button.parentElement.querySelector("h3").innerText;

      alert(`🍽 "${foodName}" added to cart successfully!`);
    });
  });


  /* ===============================
     SMOOTH SCROLL (No Layout Break)
  =============================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });


  /* ===============================
     SIMPLE SCROLL ANIMATION
     (Very light, no CSS break)
  =============================== */
  const animatedSections = document.querySelectorAll(
    ".feature, .card, .step"
  );

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transform = "translateY(0)";
          entry.target.style.opacity = "1";
        }
      });
    },
    { threshold: 0.2 }
  );

  animatedSections.forEach(section => {
    section.style.transform = "translateY(30px)";
    section.style.opacity = "0";
    section.style.transition = "all 0.6s ease";
    observer.observe(section);
  });

});
