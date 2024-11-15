const userMessage = [
  ["hi", "hey", "hello"],
  ["sure", "yes", "no"],
  ["are you genious", "are you nerd", "are you intelligent"],
  ["i hate you", "i dont like you"],
  ["how are you", "how is life", "how are you doing"],
  ["how is corona", "how is covid 19", "how is covid19 situation"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you", "who is your creator"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "ok", "okay", "nice", "welcome"],
  ["thanks", "thank you"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["corona", "covid19", "coronavirus"],
  ["you are funny"],
  ["i dont know"],
  ["boring"],
  ["im tired"],
];

const botReply = [
  ["Hello!", "Hi!", "Hey!", "Hi there!"],
  ["Okay"],
  ["Yes I am!"],
  ["I'm sorry about that. But I like you dude."],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?",
  ],
  ["Getting better. There?", "Somewhat okay!", "Yeah fine. Better stay home!"],
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually",
  ],
  ["I am always young."],
  ["I am just a bot", "I am a bot. What are you?"],
  ["Sabitha Kuppusamy"],
  ["I am nameless", "I don't have a name"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV", "Chat with me."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["You're welcome"],
  ["Briyani", "Burger", "Sushi", "Pizza"],
  ["Dude!"],
  ["Yes?"],
  ["Please stay home"],
  ["Glad to hear it"],
  ["Say something interesting"],
  ["Sorry for that. Let's chat!"],
  ["Take some rest, Dude!"],
];

const alternative = [
  "Same here, dude.",
  "That's cool! Go on...",
  "Dude...",
  "Ask something else...",
  "Hey, I'm listening...",
];

const botData = {
  name: "Phodzo Nagana",
  profession: "Software Developer",
  contact: {
    phone: "+27659624013",
    email: "phodzonagz12@gmail.com",
    linkedin: "https://www.linkedin.com/in/phodzo-nagana-7067a1263",
  },
  summary:
    "Full Stack Developer and Cloud Administrator with hands-on experience in web development, server management, and cybersecurity.",
  workExperience:
    "Full Stack Developer and Cloud Administrator at Bidvest Protea Coin. Automated HR processes, managed databases, and deployed websites.",
  education:
    "Bachelor of Science in Information Technology from Richfield Graduate Institute of Technology.",
  projects: [
    {
      title: "Gijima Training Academy Official Website",
      description:
        "Developed and deployed a ReactJS website for Gijima Training Academy.",
      links: [
        "https://github.com/PhodzoWol7",
        "https://www.linkedin.com/in/phodzo-nagana-7067a1263",
      ],
    },
  ],
  strengths: [
    "Problem Solving",
    "Adaptability",
    "Detail Oriented",
    "Technical Proficiency",
  ],
  certifications: ["Microsoft Certified: SC-900", "ISC2 Candidate"],
};

function getBotResponse(input) {
  let response = "I'm sorry, I didn't quite understand that.";
  let userInput = input.toLowerCase().trim();

  if (userInput.includes("who are you") || userInput.includes("your name")) {
    response = `My name is ${botData.name}.`;
  } else if (
    userInput.includes("what do you do") ||
    userInput.includes("profession")
  ) {
    response = `I am a ${botData.profession}.`;
  } else if (userInput.includes("contact")) {
    response = `You can reach me at ${botData.contact.phone} or email me at ${botData.contact.email}. LinkedIn: ${botData.contact.linkedin}`;
  } else if (userInput.includes("summary")) {
    response = botData.summary;
  } else if (userInput.includes("work experience")) {
    response = botData.workExperience;
  } else if (userInput.includes("education")) {
    response = botData.education;
  } else if (userInput.includes("projects") || userInput.includes("project")) {
    let projectInfo = botData.projects
      .map(
        (project) =>
          `${project.title}: ${project.description} Links: ${project.links.join(
            ", "
          )}`
      )
      .join("\n");
    response = projectInfo;
  } else if (userInput.includes("strengths")) {
    response = `My strengths include ${botData.strengths.join(", ")}.`;
  } else if (userInput.includes("certifications")) {
    response = `I hold the following certifications: ${botData.certifications.join(
      ", "
    )}.`;
  }

  return response;
}

const synth = window.speechSynthesis;

function voiceControl(string) {
  let u = new SpeechSynthesisUtterance(string);
  u.text = string;
  u.lang = "en-aus";
  u.volume = 1;
  u.rate = 1;
  u.pitch = 1;
  synth.speak(u);
}

function sendMessage() {
  const inputField = document.getElementById("input-chatbot");
  let input = inputField.value.trim();
  if (input !== "") {
    output(input);
  }
  inputField.value = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input-chatbot");
  inputField.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
      let input = inputField.value.trim();
      if (input !== "") {
        output(input);
      }
      inputField.value = "";
    }
  });
});

function output(input) {
  let product;
  let text = input
    .toLowerCase()
    .replace(/[^\w\s\d]/gi, "")
    .trim();

  let comparedText = compare(userMessage, botReply, text);
  product = comparedText
    ? comparedText
    : alternative[Math.floor(Math.random() * alternative.length)];
  addChat(input, product);
}

function compare(triggerArray, replyArray, string) {
  let item;
  for (let x = 0; x < triggerArray.length; x++) {
    for (let y = 0; y < replyArray.length; y++) {
      if (triggerArray[x][y] == string) {
        items = replyArray[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
  }
  if (item) return item;
  else return containMessageCheck(string);
}

function containMessageCheck(string) {
  let expectedReply = [
    ["Good Bye, dude", "Bye, See you!"],
    ["Good Night, dude", "Sweet dreams"],
    ["Good morning, Have a great day!", "Morning, dude!"],
    ["Good Afternoon", "Afternoon, dude!"],
  ];
  let expectedMessage = [
    ["bye", "tc", "take care"],
    ["night", "good night"],
    ["morning", "good morning"],
    ["noon"],
  ];
  let item;
  for (let x = 0; x < expectedMessage.length; x++) {
    if (expectedMessage[x].includes(string)) {
      items = expectedReply[x];
      item = items[Math.floor(Math.random() * items.length)];
    }
  }
  return item;
}

function addChat(input, product) {
  const mainDiv = document.getElementById("message-section");
  if (!mainDiv) {
    console.error("Element with ID 'message-section' not found!");
    return;
  }

  let userDiv = document.createElement("div");
  userDiv.classList.add("user", "message");
  let userSpan = document.createElement("span");
  userSpan.textContent = input;
  userDiv.appendChild(userSpan);
  mainDiv.appendChild(userDiv);

  let botDiv = document.createElement("div");
  botDiv.classList.add("bot", "message");
  let botSpan = document.createElement("span");
  botSpan.textContent = product;
  botDiv.appendChild(botSpan);
  mainDiv.appendChild(botDiv);

  var scroll = document.getElementById("message-section");
  scroll.scrollTop = scroll.scrollHeight;

  voiceControl(product);
}
