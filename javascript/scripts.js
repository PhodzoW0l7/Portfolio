function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
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

const messageInput = document.querySelector(".message-input");
messageInput.addEventListener("keydown", (e) => {
  const userMessage = e.target.value.trim();
  if (e.key == "Enter" && userMessage) {
    console.log(userMessage);
  }
});
