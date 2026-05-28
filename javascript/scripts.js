// ── Nav menu toggle ───────────────────────────────
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

const navMenuBtn = document.querySelector(".nav-menu-btn");
const navMenu = document.querySelector(".nav-menu");

navMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("responsive");
  navMenuBtn.querySelector(".menu").classList.toggle("animate");
});

// ── Scroll effects ────────────────────────────────
window.onscroll = function () {
  handleScrollEffects();
};

function handleScrollEffects() {
  const navHeader = document.getElementById("header");
  const navMenu = document.getElementById("myNavMenu");
  const scrollY = window.scrollY;

  if (scrollY > 50) {
    navHeader.classList.add("scrolled");
    navMenu.classList.add("scrolled");
  } else {
    navHeader.classList.remove("scrolled");
    navMenu.classList.remove("scrolled");
  }
}

// ── Misc ──────────────────────────────────────────
document.getElementById("year").textContent = new Date().getFullYear();

const div = document.getElementById("clickWrapper");
div.addEventListener("click", () => {
  div.childNodes[0].classList.toggle("animate");
});

// ── Typed.js ──────────────────────────────────────
var typingEffect = new Typed(".typed-text", {
  strings: [
    "Full Stack Developer",
    "Software Engineer",
    "Cloud Security Analyst",
  ],
  loop: true,
  typeSpeed: 60,
  backSpeed: 80,
  backDelay: 2000,
});

// ── Chatbot ───────────────────────────────────────
let chatbotGreetingShown = false;

function toggleChatbot() {
  const chatbotWindow = document.getElementById("chatbot-window");
  const isVisible = chatbotWindow.style.display === "block";

  if (!isVisible) {
    chatbotWindow.style.display = "block";

    // Show greeting only on first open
    if (!chatbotGreetingShown) {
      const chatContainer = document.querySelector(".messenger-chat");
      chatContainer.innerHTML = `
        <div class="message left-message">
          <div class="message-img" style="background-image:url(chatbot/chatbot.png)"></div>
          <div>
            <div class="message-info">
              <div class="message-info-name">Chatbuddy</div>
              <div class="message-info-time">${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</div>
            </div>
            <div class="message-bubble">Hi! Welcome to Phodzo's Portfolio Chatbot. Ask me anything about his experience, skills, projects, or certifications!</div>
          </div>
        </div>`;
      chatbotGreetingShown = true;
    }
  } else {
    chatbotWindow.style.display = "none";
  }
}

function handleUserMessage(event) {
  event.preventDefault();
  const input = document.querySelector(".message-input");
  const userMessage = input.value.trim();

  if (!userMessage) return;

  addChat("You", "chatbot/user.png", "right", userMessage);
  input.value = "";

  const response = getResponse(userMessage);

  const delay = Math.min(userMessage.split(" ").length * 100, 800);
  setTimeout(() => {
    addChat("Chatbuddy", "chatbot/chatbot.png", "left", response);
  }, delay);

  return false;
}

// ── EmailJS ───────────────────────────────────────
emailjs.init("3ovpuIyGV9lbKcY_j");

function sendEmail(e) {
  e.preventDefault();

  const btn     = document.getElementById("submit-btn");
  const btnText = document.getElementById("btn-text");
  const btnIcon = document.getElementById("btn-icon");
  const status  = document.getElementById("form-status");

  btn.disabled = true;
  btnText.textContent = "Sending...";
  btnIcon.className = "fa-solid fa-spinner fa-spin";

  emailjs.sendForm("service_me8jj0i", "template_9127pvg", "#contact-form")
    .then(() => {
      status.innerHTML = `<div class="form-success">
        <i class="fa-solid fa-circle-check"></i> Message sent! I'll get back to you soon.
      </div>`;
      document.getElementById("contact-form").reset();
    })
    .catch(() => {
      status.innerHTML = `<div class="form-error">
        <i class="fa-solid fa-circle-exclamation"></i> Something went wrong. Try emailing me directly.
      </div>`;
    })
    .finally(() => {
      btnText.textContent = "Send message";
      btnIcon.className = "fa-regular fa-paper-plane";
      btn.disabled = false;
    });
}
