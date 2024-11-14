function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

window.onscroll = function () {
  handleScrollEffects();
};

function handleScrollEffects() {
  const navHeader = document.getElementById("header");
  const navMenu = document.getElementById("myNavMenu");
  const scrollY = window.scrollY;

  // Handle header shadow and height
  if (scrollY > 50) {
    navHeader.classList.add("scrolled");
    navMenu.classList.add("scrolled"); // Add class to navMenu
  } else {
    navHeader.classList.remove("scrolled");
    navMenu.classList.remove("scrolled"); // Remove class from navMenu
  }
}

var typingEffect = new Typed(".typed-text", {
  strings: [
    "Full Stack Developer",
    "Cloud Administrator",
    "Cyber Security Analyst",
  ],
  loop: true,
  typeSpeed: 60,
  backSpeed: 80,
  backDelay: 2000,
});

const chatbotIcon = document.getElementById("chatbot-icon");
const chatbotInterface = document.getElementById("chatbot-interface");

// Function to toggle the chatbot interface
chatbotIcon.addEventListener("click", function () {
  if (
    chatbotInterface.style.display === "none" ||
    chatbotInterface.style.display === ""
  ) {
    chatbotInterface.style.display = "block"; // Show the chatbot
  } else {
    chatbotInterface.style.display = "none"; // Hide the chatbot
  }
});
