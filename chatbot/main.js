const messagerForm = document.querySelector(".message-inputarea");
const messagerInput = document.querySelector(".message-input");
const messagerChat = document.querySelector(".messenger-chat");
const BOT_IMG = "chatbot.png";
const PERSON_IMG = "user.png";
const BOT_NAME = "BOT";
const PERSON_NAME = "User";

// Combined responses object
const responses = {
}
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
  if (input === "hi" || input === "hello" ||input === "hey" ||input === "hi chatbuddy" ||input === "chatbuddy" || input === "hey there!") {
    return "Hello!, How can i help you today?";
  } else if (input === "how are you") {
    return "I'm good! How are you?";
  }else if (input === "good morning") {
    return "Good morning! Hope you're having a great start to the day!";
  } else if (input === "good afternoon") {
    return "Good afternoon! How's your day going so far?";
  } else if (input === "hi!") {
    return "Hello! How's everything with you today?";
  } else if (input === "hello!") {
    return "Hi there! How can I help you?";
  } else if (input === "hey there!") {
    return "Hey! What can I do for you today?";
  } else if (input === "good morning!") {
    return "Good morning! Wishing you a productive and happy day ahead!";
  } else if (input === "good afternoon!") {
    return "Good afternoon! Hope you're doing well today!";
  }
  else if (input.includes("portfolio")) {
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
  else if (input === "what is your experience in programming") {
    return "I am Phodzo Nagana, a Full Stack Developer and Cloud Administrator. Here's a quick overview of my skills and experience: \n\n- Proficient in web development, including HTML, CSS, JavaScript, ReactJS, Angular, TypeScript, and Tailwind CSS. \n- Experienced with backend technologies like Node.js, .NET Core, ASP.NET MVC, PHP, C#, SQL, and MongoDB. \n- Skilled in cloud technologies such as Microsoft Azure and DevOps, with certifications like Azure Fundamentals and SC-900. \n- Knowledge of cybersecurity concepts from training with Cisco and Fortinet, focusing on threat analysis and server management. \n- Proficient in creating responsive websites, automation processes, and server management.\n\nLet me know if you'd like to hear more about specific projects or skills!";
  } else if (input === "tell me more about your certifications or technical skills") {
    return "Certainly! I hold certifications such as: \n\n- Microsoft Certified: SC-900 (Cybersecurity Fundamentals) \n- Fortinet Certified Fundamentals in Cybersecurity \n- ISC2 Candidate on Cybersecurity \n\nI am also trained in Cisco's Introduction to Cybersecurity and Cloud Computing. My technical skills include using Git, GitHub, ReactJS, Angular, Bootstrap, and SQL Server for software development and cloud environments.";
  } else if (input === "can you share your achievements") {
    return "Here are some key achievements from my career so far: \n\n- Successfully developed and deployed the Gijima Training Academy Official Website using ReactJS, ensuring a modern, responsive, and user-friendly design. \n- Automated HR processes and managed database systems during my internship at Bidvest Protea Coin. \n- Implemented server management and optimized cloud-based environments with Microsoft Azure.";
  } else if (input === "what technologies have you worked with") {
    return "I have worked with a variety of technologies across both frontend and backend development, including: \n\n- **Frontend:** HTML, CSS, JavaScript, ReactJS, Angular, TypeScript, Tailwind CSS, Bootstrap. \n- **Backend:** Node.js, .NET Core, ASP.NET MVC, PHP, C#, SQL Server, MongoDB. \n- **Cloud and DevOps:** Microsoft Azure, Git, GitHub, DevOps practices, automation tools. \n- **Cybersecurity:** Fundamentals in Cybersecurity with certifications from Fortinet and ISC2.";
  } else if (input === "what projects have you worked on") {
    return "I have worked on several projects, including: \n\n- **Gijima Training Academy Official Website**: Developed and deployed a dynamic ReactJS website to create an engaging platform. \n- **HR Automation System**: Automated various HR processes and managed databases during my internship at Bidvest Protea Coin. \n- **Server Management**: Worked with cloud technologies to manage and optimize server environments at Bidvest Protea Coin.";
  } else if (input === "how did you deploy your projects") {
    return "For my projects, I primarily use GitHub Pages for deployment. For example, the Gijima Training Academy website was deployed on GitHub Pages, ensuring fast performance and easy access. For more complex setups, I use Microsoft Azure and other cloud services to host and maintain the backend.";
  } else if (input === "what is your experience with cloud technologies") {
    return "I have experience working with **Microsoft Azure** for cloud administration and DevOps practices. I am certified in Azure Fundamentals and have hands-on experience with cloud computing, server management, and automation processes. Additionally, I use Azure for deploying and managing web applications and databases.";
  } else if (input === "how do you ensure your websites are responsive") {
    return "I ensure my websites are responsive by using **CSS frameworks** like Bootstrap and **media queries** in custom CSS. Additionally, I rely on ReactJS for creating dynamic, mobile-friendly components, and Tailwind CSS for utility-first styling. I test responsiveness across multiple devices and screen sizes to ensure the best user experience.";
  } else if (input === "what is your experience with databases") {
    return "I have experience with both **SQL** and **NoSQL** databases. I am proficient in writing SQL queries, managing relational databases such as **SQL Server**, and using **MongoDB** for non-relational data storage. I have used these skills to manage and automate database processes during my internship.";
  } else if (input === "do you have experience with angular") {
    return "Yes, I have worked with **Angular** to develop dynamic, single-page applications. I used Angular for building the frontend of certain projects, leveraging its two-way data binding and component-based architecture to create efficient, scalable web applications.";
  } else if (input === "what tools do you use for version control") {
    return "I use **Git** for version control and **GitHub** for collaboration and code sharing. Git allows me to track changes and manage different versions of my codebase, while GitHub helps in organizing and sharing repositories, collaborating with other developers, and deploying applications.";
  } else if (input === "do you have experience with agile development") {
    return "Yes, I have experience working in **Agile development** environments. During my internship, I participated in Agile sprints, attending daily stand-ups, and contributing to sprint planning and retrospectives. Agile methodologies helped me collaborate effectively with teams and deliver projects incrementally.";
  } else if (input === "how do you approach problem solving") {
    return "I approach problem-solving systematically by first analyzing the issue, breaking it down into smaller components, and exploring multiple solutions. I also prioritize collaboration and research, utilizing online resources and consulting with team members when necessary. I always aim to create efficient, scalable solutions.";
  } else if (input === "what is your experience with server management") {
    return "I have experience in **server management** using **Microsoft Azure**. I have configured and deployed applications, managed cloud environments, and ensured system performance and security. I also worked on setting up automated processes for server maintenance and monitoring.";
  } else if (input === "have you worked with microsoft azure") {
    return "Yes, I am proficient in using **Microsoft Azure** for cloud administration and deployment. I have worked with Azure to manage databases, deploy web applications, and optimize cloud resources. My certification in **Azure Fundamentals** further supports my expertise in this area.";
  } else if (input === "what programming languages do you know") {
    return "I am proficient in several programming languages, including: \n\n- **Frontend**: HTML, CSS, JavaScript, TypeScript, ReactJS, Angular. \n- **Backend**: Node.js, .NET Core, ASP.NET, PHP, C#. \n- **Databases**: SQL, MongoDB. \n- **Cybersecurity**: Knowledge of tools and technologies related to cybersecurity.";
  } else if (input === "do you have any experience with automation") {
    return "Yes, I have experience in automating various processes, including HR workflows, server setup, and cloud management. During my internship, I automated several HR tasks using scripts and built processes that reduced manual work and improved efficiency.";
  } else if (input === "can you tell me about your internship experience") {
    return "During my internship at **Bidvest Protea Coin**, I worked as a Full Stack Developer and Cloud Administrator. My role involved automating HR processes, administering databases, writing SQL queries, and managing server environments. I also worked on deploying and maintaining websites, focusing on automation and process efficiency.";
  } else if (input === "how do you keep up with new technologies") {
    return "I stay updated with new technologies by regularly reading technical blogs, taking online courses, and participating in webinars. I also collaborate with other developers and contribute to open-source projects on GitHub to keep my skills sharp and relevant.";
  } else if (input === "what are your strengths") {
    return "My strengths include: \n\n- **Problem Solving**: I excel at identifying issues and coming up with creative solutions. \n- **Adaptability**: I can easily adapt to new tools, technologies, and environments. \n- **Detail-Oriented**: I ensure accuracy and efficiency in all tasks. \n- **Technical Proficiency**: I have a strong understanding of web development frameworks, server setup, and database management.";
  } else {
    return "Sorry, I don't understand that. Can you ask something else?";
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
 