// Menu functionality
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

// Mobile menu toggle
const navMenuBtn = document.querySelector(".nav-menu-btn");
const navMenu = document.querySelector(".nav-menu");

navMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("responsive");
  navMenuBtn.querySelector(".menu").classList.toggle("animate");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Scroll effects handler
window.onscroll = function () {
  handleScrollEffects();
};

function handleScrollEffects() {
  const navHeader = document.getElementById("header");
  const navMenu = document.getElementById("myNavMenu");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  const scrollY = window.scrollY;

  // Handle header shadow and height
  if (scrollY > 50) {
    navHeader.classList.add("scrolled");
    navMenu.classList.add("scrolled");
  } else {
    navHeader.classList.remove("scrolled");
    navMenu.classList.remove("scrolled");
  }

  // Update active navigation state
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
}

// Click wrapper animation
const div = document.getElementById("clickWrapper");
div.addEventListener("click", () => {
  div.childNodes[0].classList.toggle("animate");
});

// Typed.js initialization
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

// Scroll Reveal initialization
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(".featured-text", {});
sr.reveal(".featured-image", { delay: 700 });
sr.reveal(".project-box", { interval: 100 });
sr.reveal(".certification-box", { interval: 100 });

// Chatbot functionality
function toggleChatbot() {
  const chatbotWindow = document.getElementById("chatbot-window");
  chatbotWindow.style.display =
    chatbotWindow.style.display === "none" ? "block" : "none";
}

function handleUserMessage(event) {
  event.preventDefault();
  const input = document.querySelector(".message-input");
  const userMessage = input.value;

  function appendMessage(name, text, side, img) {
    const chatContainer = document.querySelector(".messenger-chat");
    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const messageHTML = `
            <div class="message ${side}-message">
                <div class="message-img" style="background-image:url(${img})"></div>
                <div>
                    <div class="message-info">
                        <div class="message-info-name">${name}</div>
                        <div class="message-info-time">${time}</div>
                    </div>
                    <div class="message-bubble">${text}</div>
                </div>
            </div>`;
    chatContainer.insertAdjacentHTML("beforeend", messageHTML);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
}

// Email functionality
emailjs.init("3ovpuIyGV9lbKcY_j");

function sendEmail(event) {
  event.preventDefault();

  const form = document.getElementById("contact-form");
  if (!form) {
    console.error("Form not found!");
    return;
  }

  emailjs
    .sendForm("service_6p0zq8g", "template_iqzo52d", form)
    .then((response) => {
      alert("Message sent successfully!");
      form.reset();
    })
    .catch((error) => {
      alert("There was an error sending your message. Please try again.");
      console.error("Error:", error);
    });
}
