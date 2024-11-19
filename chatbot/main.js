const messagerForm = document.querySelector(".message-inputarea");
const messagerInput = document.querySelector(".message-input");
const messagerChat = document.querySelector(".messenger-chat");
const BOT_IMG = "chatbot.png";
const PERSON_IMG = "user.png";
const BOT_NAME = "BOT";
const PERSON_NAME = "Phodzo";

// Combined responses object
const responses = {
  greetings: [
    "Hi!",
    "Hello!",
    "Hey there!",
    "Good Morning",
    "Good Afternoon",
    "Good Evening",
    "Hello",
    "Hi",
    "Hey",
    "Hi chatbuddy",
    "Chatbuddy",
    "Dude",
    "What's up?",
    "Howdy!",
    "Hey, how’s it going?",
    "Hello there!",
    "Hi buddy!",
    "Yo!",
    "Greetings!",
    "Hey, what's new?",
    "Hi friend!",
    "Good day!",
  ],
  howAreYou: [
    // Changed key to be a valid identifier
    "How's life?",
    "How are you doing today?",
    "What's up today?",
    "What's good?",
    "How have you been?",
    "How’s everything?",
    "How’s your day so far?",
    "Are you okay?",
    "Feeling good today?",
    "How’s life treating you?",
    "What’s new with you?",
    "Everything alright?",
    "How’s your mood today?",
    "What’s the vibe?",
  ],
  canYouHelpMe: [
    // Changed key to be a valid identifier
    "Yes, I can help you with anything on this website.",
    "What’s the weather like?",
    "Do you have any tips for me?",
    "Can you recommend something to read?",
    "What’s happening in the news?",
    "Can you tell me a fun fact?",
    "What do you know about [topic]?",
    "What’s trending right now?",
  ],
  favoriteQuestions: [
    // Changed key to be a valid identifier
    "What’s your favorite color?",
    "Tell me something interesting.",
    "Do you know any riddles?",
    "What’s your favorite movie?",
    "Got any hobbies?",
    "What’s your favorite food?",
    "Do you believe in aliens?",
    "What’s the best place to visit?",
    "Any plans for today?",
  ],
  canWePlayAGame: [
    // Changed key to be a valid identifier
    "Yes, we can play a game.",
  ],
  default: [
    "I'm not sure I understand that.",
    "Could you please rephrase?",
    "Hmm, I don't quite understand.",
    "Please try again.",
  ],
};

const farewells = [
  // Removed incorrect structure
  "Bye!",
  "See you later!",
  "Take care!",
  "Catch you later!",
  "Goodbye!",
  "Talk to you soon!",
  "See ya!",
  "Ciao!",
  "Adios!",
  "Have a good one!",
];
messagerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const messageText = messagerInput.value.trim();
  if (!messageText) return;

  // Clear input and add user message
  messagerInput.value = "";
  addChat(PERSON_NAME, PERSON_IMG, "right", messageText);

  // Generate bot response
  output(messageText);
});

function output(input) {
  let cleanedInput = input
    .toLowerCase()
    .replace(/[^a-zA-Z\s]/g, "") // Remove non-alphabetical characters
    .trim();

  const response = getResponse(cleanedInput);

  const delay = cleanedInput.split(" ").length * 100;
  setTimeout(() => {
    addChat(BOT_NAME, BOT_IMG, "left", response);
  }, delay);
}

function getResponse(input) {
  // Loop through categories in `responses` to find a match
  for (const [category, prompts] of Object.entries(responses)) {
    if (
      category !== "default" &&
      prompts.some((prompt) => prompt.toLowerCase() === input)
    ) {
      // Return a random reply from matched category
      return prompts[Math.floor(Math.random() * prompts.length)];
    }
  }

  // Default response if no match is found
  return responses.default[
    Math.floor(Math.random() * responses.default.length)
  ];
}

function addChat(name, img, side, text) {
  const msgHTML = `
    <div class="message ${side}-msg">
      <div class="message-img" style="background-image:url(${img})"></div>
      <div class="message-bubble">
        <div class="message-info">
          <div class="message-info-name">${name}</div>
          <div class="message-info-time">${formatDate(new Date())}</div>
        </div>
        <div class="message-text">${text}</div>
      </div>
    </div>`;
  messagerChat.insertAdjacentHTML("beforeend", msgHTML);
  // Scroll to the bottom of the chat container
  messagerChat.scrollTop = messagerChat.scrollHeight;
}

function formatDate(date) {
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  return `${hours}:${minutes}`;
}

function getResponse(input) {
  // Convert input to lowercase and clean it
  input = input.toLowerCase().trim();

  // Custom responses for specific inputs
  if (input === "hi") {
    return "Hellooo!";
  } else if (input === "how are you") {
    return "I'm good! How are you?";
  } else if (input.includes("portfolio")) {
    return "Here are the options: 1. Projects 2. Skills 3. Contact Information. Please specify which one you'd like to know more about.";
  } else if (input.includes("skills")) {
    return "Here are my skills: JavaScript, React, Angular, SQL, and more!";
  } else if (input.includes("projects")) {
    return "Here are some of my projects: 1. Portfolio Website 2. E-commerce App 3. Chatbot Application. Would you like to know more about a specific project?";
  } else if (input.includes("contact me") || input.includes("contact")) {
    return "You can contact me via email at phodzo@example.com or reach out on LinkedIn at linkedin.com/in/phodzo.";
  } else if (input.includes("summary")) {
    return `Driven Full Stack Developer and Cloud Administrator with hands-on experience in web development, server management, and cybersecurity. Skilled in HTML, CSS, JavaScript, ReactJS, SQL, MongoDB, and Microsoft Azure. Passionate about integrating technology solutions across front-end, back-end, and server infrastructures.`;
  } else if (input.includes("work experience")) {
    return `Here is my work experience:\n\n1. **Human Resource IT Intern** at Bidvest Protea Coin (03/2024 - 03/2024)\n   - Automated HR processes.\n   - Administered databases and wrote SQL queries.\n   - Managed servers and deployed websites.`;
  } else if (input.includes("education")) {
    return `Bachelor of Science in Information Technology from Richfield Graduate Institute of Technology (01/2021 - 12/2023). Majored in Software Development, NQF Level 7.`;
  } else if (input.includes("certifications")) {
    return `Here are some of my certifications:\n- Microsoft Certified: SC-900\n- Fundamentals in Cybersecurity\n- Fortinet Certified Fundamentals\n- Cisco Introduction to Cybersecurity`;
  } else if (input.includes("languages")) {
    return `I am proficient in:\n- English (Native)\n- Tshivenda (Native)`;
  } else if (input.includes("achievements")) {
    return `Here are my key achievements:\n- Successfully developed and deployed a full-scale ReactJS website for Gijima Training Academy.\n- Implemented automation processes and server setups.\n- Managed databases efficiently for HR operations.`;
  }

  // Fallback: Check through categories in `responses` to find a match
  for (const [category, prompts] of Object.entries(responses)) {
    if (
      category !== "default" &&
      prompts.some((prompt) => prompt.toLowerCase() === input)
    ) {
      // Return a random reply from the matched category
      return prompts[Math.floor(Math.random() * prompts.length)];
    }
  }

  // Default response if no match is found
  return responses.default[
    Math.floor(Math.random() * responses.default.length)
  ];
}
 