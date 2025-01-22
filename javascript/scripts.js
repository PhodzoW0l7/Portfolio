
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navMenu = document.querySelector('.nav-menu');

navMenuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('responsive');
  navMenuBtn.querySelector('.menu').classList.toggle('animate');
});

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
const div = document.getElementById("clickWrapper");

div.addEventListener('click', () => {
  div.childNodes[0].classList.toggle("animate");
});

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
  function appendMessage(name, text, side, img) {
    const chatContainer = document.querySelector(".messenger-chat");
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
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
// Initialize EmailJS with your User ID
emailjs.init("3ovpuIyGV9lbKcY_j");
function sendEmail(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  // Get the form element by ID
  const form = document.getElementById("contact-form");
  if (!form) {
    console.error("Form not found!");
    return;
  }

  // Send the form data to EmailJS
  emailjs.sendForm("service_6p0zq8g", "template_iqzo52d", form)
    .then((response) => {
      alert("Message sent successfully!");
      form.reset(); // Reset the form fields after success
    })
    .catch((error) => {
      alert("There was an error sending your message. Please try again.");
      console.error("Error:", error);
    });
}
