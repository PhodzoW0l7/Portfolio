const BOT_IMG = "chatbot/chatbot.png";
const PERSON_IMG = "chatbot/user.png";
const BOT_NAME = "Chatbuddy";
const PERSON_NAME = "You";

function getResponse(input) {
  input = input.toLowerCase().trim();

  if (input === "hi" || input === "hello" || input === "hey" || input === "hi chatbuddy" || input === "chatbuddy" || input === "hey there" || input === "hi!" || input === "hello!") {
    return "Hello! How can I help you today?";
  } else if (input === "how are you") {
    return "I'm doing great! How are you?";
  } else if (input === "good morning" || input === "good morning!") {
    return "Good morning! Hope you're having a productive day!";
  } else if (input === "good afternoon" || input === "good afternoon!") {
    return "Good afternoon! Hope you're doing well!";
  } else if (input === "good night" || input === "good night!" || input === "bye" || input === "bye!" || input === "goodbye") {
    return "Goodbye! Feel free to reach out anytime you have questions!";
  }

  // Resume/CV related questions
  else if (input.includes("resume") || input.includes("cv") || input.includes("my experience")) {
    return "I'm a Full Stack Developer with 2+ years of experience. I've worked at FNB, CAPACITI, and Bidvest Protea Coin. Would you like to know more about my experience, skills, projects, or certifications?";
  } else if (input.includes("portfolio")) {
    return "Here's what you can explore: 1. My Skills 2. My Experience 3. My Projects 4. My Certifications 5. How to Contact Me. What would you like to know more about?";
  } else if (input.includes("skills")) {
    return "I'm proficient in: Frontend (HTML, CSS, JavaScript, React, Angular, TypeScript), Backend (Java, Spring Boot, Node.js, C#, PHP, Python), Databases (SQL, MongoDB, PostgreSQL, Firebase), and Cloud & DevOps (AWS, Azure, GCP, Docker, Git, Linux).";
  } else if (input.includes("projects")) {
    return "I've worked on several projects including: 1. Navcrowd - South African business directory 2. Gijima Training Academy - Skills development platform 3. Login & Register platform with ASP.NET & Angular 4. To-Do List app with Node.js 5. Kids Learning Platform. Which would you like to know more about?";
  } else if (input.includes("certifications") || input.includes("certified")) {
    return "I hold 10+ certifications including: Cisco Introduction to Cybersecurity, Microsoft SC-900, Fortinet Certified Fundamentals in Cybersecurity, ISC2 Cybersecurity Candidate, and more. Which certification would you like details on?";
  } else if (input.includes("work experience") || input.includes("experience")) {
    return "Here's my experience:\n\n1. **Software Developer Intern** at FNB (Mar 2025 - Present) - Java, Spring Boot, Angular, REST APIs\n\n2. **Java Developer Intern** at CAPACITI (Nov 2024 - Feb 2025) - Java, Spring Boot, React\n\n3. **Full Stack Developer Intern** at Bidvest Protea Coin (Mar - Oct 2024) - React, Node.js, ASP.NET";
  } else if (input.includes("education")) {
    return "Bachelor of Science in Information Technology from Richfield Graduate Institute of Technology (2021-2023). Majored in Software Development, NQF Level 7.";
  } else if (input.includes("languages")) {
    return "I speak English (Native) and Tshivenda (Native).";
  } else if (input.includes("programming languages")) {
    return "I'm proficient in: JavaScript, TypeScript, Java, C#, Python, PHP, HTML, CSS, SQL. I also work with frameworks and tools across multiple stacks.";
  } else if (input.includes("frontend")) {
    return "My frontend skills include: HTML, CSS, JavaScript, React, Angular, TypeScript, Bootstrap, and Tailwind CSS. I focus on creating responsive, user-friendly interfaces.";
  } else if (input.includes("backend")) {
    return "My backend expertise includes: Java with Spring Boot, Node.js, ASP.NET Core, C#, and PHP. I build scalable APIs and handle database operations efficiently.";
  } else if (input.includes("database")) {
    return "I have experience with both SQL (MySQL, SQL Server, PostgreSQL) and NoSQL (MongoDB, Firebase) databases. I write efficient queries and design scalable data models.";
  } else if (input.includes("cloud")) {
    return "I have hands-on experience with AWS, Azure, and GCP. I'm experienced in DevOps practices, Docker containerization, and deploying applications to cloud platforms.";
  } else if (input.includes("git") || input.includes("version control")) {
    return "I use Git and GitHub for version control and collaboration. I'm familiar with GitFlow, branching strategies, and best practices for code management.";
  } else if (input.includes("deployed") || input.includes("deployment")) {
    return "I've deployed projects using GitHub Pages, Microsoft Azure, and other cloud platforms. I'm experienced in CI/CD pipelines and automated deployments.";
  } else if (input.includes("gijima")) {
    return "Gijima Training Academy is a skills development platform I developed with React. It was built during my internship at Bidvest Protea Coin to help with employee training and development.";
  } else if (input.includes("fnb") || input.includes("first national bank")) {
    return "I currently work as a Software Developer Intern at FNB. I build REST APIs using Java & Spring Boot, work with Angular frontends, and recently won their AI Innovation competition for building a prompt injection detection system.";
  } else if (input.includes("achievement") || input.includes("accomplishment")) {
    return "Some of my key achievements include: Won FNB's AI Innovation competition, Deployed Gijima Training Academy, Automated HR processes at Bidvest Protea Coin, Built multiple full-stack applications, Earned 10+ professional certifications.";
  } else if (input.includes("contact")) {
    return "You can reach me at: Email: Phodzonagz12@gmail.com | GitHub: PhodzoW0l7 | LinkedIn: phodzo-nagana | Location: Kempton Park, Gauteng, South Africa";
  } else if (input.includes("interested in") || input.includes("looking for")) {
    return "I'm open to opportunities in full-stack development, backend development, cloud architecture, and DevOps roles. Feel free to reach out if you think we're a good fit!";
  } else if (input.includes("what can you do") || input.includes("how can i use you")) {
    return "I can tell you about: Phodzo's background, skills, experience, projects, certifications, and how to contact him. Just ask me anything about his professional profile!";
  } else if (input.includes("java") || input.includes("spring boot")) {
    return "I'm experienced in Java and Spring Boot. I've built REST APIs, worked with Spring Data JPA, implemented security with Spring Security, and deployed microservices using Spring Boot.";
  } else if (input.includes("react")) {
    return "I'm proficient in React. I've built responsive web applications, used React hooks for state management, worked with routing, and integrated external APIs. I've deployed React apps on GitHub Pages and Azure.";
  } else if (input.includes("angular")) {
    return "I have hands-on experience with Angular. I've built dynamic single-page applications, used Angular components, services, routing, and form validation. Currently using Angular at FNB for business process dashboards.";
  } else if (input.includes("about you") || input.includes("who are you")) {
    return "I'm Phodzo Nagana, a Full Stack Developer and Cloud Administrator with 2+ years of experience. I specialize in building scalable web applications, cloud solutions, and modern software systems. I'm passionate about leveraging technology to solve real-world problems!";
  } else {
    return "Sorry, I'm not sure about that! Try asking me about my skills, experience, projects, certifications, or how to contact me. What would you like to know?";
  }
}

function addChat(name, img, side, text) {
  const chatContainer = document.querySelector(".messenger-chat");
  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const msgHTML = `
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

  chatContainer.insertAdjacentHTML("beforeend", msgHTML);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}
 