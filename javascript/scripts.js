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
function toggleChatbot() {
  const chatbotWindow = document.getElementById("chatbot-window");
  chatbotWindow.style.display =
    chatbotWindow.style.display === "none" ? "block" : "none";
}
function handleUserMessage(event) {
  event.preventDefault(); // Prevent form submission
  const input = document.querySelector(".message-input");
  const userMessage = input.value;

  // Append user's message to chat
  appendMessage("Phodzo", userMessage, "right-message", "user.png");

  // Clear input field
  input.value = "";

  // Optionally respond with a greeting or another message
  appendMessage("Bot", "Hi!", "left-message", "chatbot.png");
}
