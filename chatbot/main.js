const messagerForm = document.querySelector(".message-inputarea");
const messagerInput = document.querySelector(".message-input");
const messagerChat = document.querySelector(".messenger-chat");
const BOT_IMG = "chatbot.png";
const PERSON_IMG = "user.png";
const BOT_NAME = "BOT";
const PERSON_NAME = "Phodzo";
const prompts = [
    "Hi!", "Hello!", "Hey there!", "Good Morning", "Good Afternoon", 
    "Good Evening", "Hello", "Hi", "Hey", "Hi chatbuddy", "Chatbuddy", "Dude",
    "What's up?", "Howdy!", "Hey, how’s it going?", "Hello there!", "Hi buddy!", 
    "Yo!", "Greetings!", "Hey, what's new?", "Hi friend!", "Good day!"
  ];
  
  const inquiries = [
    "How are you?", "Hows life?", "How are you doing today?", "Whats up today?", 
    "Whats good?", "How have you been?", "How’s everything?", "How’s your day so far?", 
    "Are you okay?", "Feeling good today?", "How’s life treating you?", "What’s new with you?", 
    "Everything alright?", "How’s your mood today?", "What’s the vibe?"
  ];
  
  const helpRequests = [
    "Can you help me with something?", "I need some advice.", "Can you tell me a joke?", 
    "What’s the weather like?", "Do you have any tips for me?", "Can you recommend something to read?", 
    "What’s happening in the news?", "Can you tell me a fun fact?", "What do you know about [topic]?", 
    "What’s trending right now?"
  ];
  
  const casualChat = [
    "What’s your favorite color?", "Tell me something interesting.", "Do you know any riddles?", 
    "What’s your favorite movie?", "Got any hobbies?", "What’s your favorite food?", 
    "Do you believe in aliens?", "What’s the best place to visit?", "Any plans for today?", 
    "Can we play a game?"
  ];
  
  const specificQuestions = [
    "What’s the time?", "Do you know any recipes?", "Can you do math?", 
    "Who’s your creator?", "Do you have any siblings?", "What’s your favorite book?", 
    "Can you sing?", "Do you like music?", "What’s your opinion on AI?", "How old are you?"
  ];
  
  const farewells = [
    "Bye!", "See you later!", "Take care!", "Catch you later!", "Goodbye!", 
    "Talk to you soon!", "See ya!", "Ciao!", "Adios!", "Have a good one!"
  ];
  const professionalPrompts = [
    "What is your full name?", "What do you do for a living?", 
    "Can you tell me about your work experience?", "What are your technical skills?", 
    "What is your educational background?", "What programming languages are you proficient in?", 
    "Have you worked on any major projects?", "Can you explain the Gijima Training Academy website project?", 
    "What does a Full Stack Developer and Cloud Administrator do?", 
    "What is your experience with ReactJS?", "Do you have experience with SQL databases?", 
    "What are your certifications?", "What is your experience with Microsoft Azure?", 
    "Can you tell me more about your cybersecurity skills?", 
    "What tools are you familiar with for DevOps?", "What cloud platforms have you worked with?", 
    "What are your strengths as a developer?", "How do you handle problem-solving?", 
    "Have you worked on server management?", "What is your experience with automation processes?", 
    "Do you have experience with front-end frameworks like Angular?", 
    "Can you describe your internship at Bidvest Protea Coin?", 
    "What technologies did you use during your internship?", 
    "What is the importance of cybersecurity in your field?", 
    "Can you share a link to your GitHub?", "Can I see your LinkedIn profile?", 
    "Where are you currently based?", "What is your contact information?", 
    "Can you provide details about your Microsoft certifications?", 
    "What web development projects have you completed?", 
    "Have you worked on responsive design?", "What problem-solving challenges have you overcome?"
  ];
  
  const personalPrompts = [
    "Where did you study?", "What made you choose a career in software development?", 
    "What is your favorite technology to work with?", 
    "What motivates you as a developer?", "Do you have experience in team projects?", 
    "What do you enjoy about cloud administration?", "How do you stay updated with new technologies?", 
    "What are your career goals?", "Can you work on a freelance basis?", 
    "What makes you unique as a developer?", "What is your biggest achievement so far?", 
    "What do you consider your greatest strength?", 
    "What’s the biggest challenge you’ve faced in a project?", 
    "How do you balance technical and creative aspects in your work?", 
    "How would you describe your work ethic?", "Do you prefer working front-end or back-end?", 
    "What’s your favorite programming language and why?", 
    "What inspired you to start working with ReactJS?", 
    "How do you manage your time while working on multiple tasks?"
  ];
  
  const technicalPrompts = [
    "What is your experience with Git and GitHub?", "How do you approach full-stack development?", 
    "What frameworks are you proficient in?", "Can you explain the concept of responsive design?", 
    "What’s the difference between SQL and MongoDB?", 
    "What tools do you use for debugging?", 
    "How do you ensure the security of web applications?", 
    "What’s your approach to database optimization?", 
    "How do you deploy websites using GitHub Pages?", 
    "What’s the importance of cloud computing in your work?", 
    "How do you handle server management?", 
    "What do you know about DevOps pipelines?", 
    "What’s your process for creating automation scripts?", 
    "Can you explain your experience with cybersecurity fundamentals?", 
    "How do you integrate front-end and back-end systems?"
  ];
  const alternativePrompts = [
    "Is there anything specific you'd like to know about my work?", 
    "Feel free to ask me about my skills or certifications!", 
    "Want to hear more about the projects I’ve worked on?", 
    "Curious about my experience in cloud administration?", 
    "What can I share about my internship at Bidvest Protea Coin?", 
    "Do you want to know more about my web development journey?", 
    "Have any questions about my certifications in cybersecurity?", 
    "Interested in learning about my technical strengths?", 
    "Ask me how I developed the Gijima Training Academy website!", 
    "Need details about my education or training?", 
    "What would you like to know about my problem-solving skills?", 
    "Do you want to hear about my approach to server management?", 
    "Curious about the tools and technologies I use?", 
    "Want insights on my experience with automation processes?", 
    "How can I help you understand my expertise better?", 
    "Would you like to know more about my full-stack development process?", 
    "Ask me about the programming languages I’m skilled in!", 
    "Need advice on web development or cloud computing?", 
    "Let me know if you’d like tips on cybersecurity!", 
    "What’s on your mind? Feel free to ask me anything!"
  ];
  messagerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const messageText = messagerInput.value;
    if (!messageText) return;
    messagerInput.value = "";
    addChat(PERSON_NAME, PERSON_IMG, "right", messageText);
    output(messageText);
  });
  
  function output(input) {
    let product;
    let text = input
      .toLowerCase()
      .replace(/[\W_]+/gi, "")
      .replace(/\d+/g, "")
      .trim();
  
    text = text
      .replace(/a/g, "")
      .replace(/i feel/g, "")
      .replace(/what/g, "what is")
      .replace(/please/g, "")
      .replace(/r u/g, "are you")
      .replace(/hi/g, "Hi")
      .replace(/hello/g, "Hello")
      .replace(/hey/g, "Hey");
  
    if (
      compare(
        prompts,
        alternativePrompts,
        technicalPrompts,
        personalPrompts,
        professionalPrompts,
        farewells,
        inquiries,
        helpRequests,
        casualChat,
        specificQuestions,
        text
      )
    ) {
      product = compare(
        prompts,
        alternativePrompts,
        technicalPrompts,
        personalPrompts,
        professionalPrompts,
        farewells,
        inquiries,
        helpRequests,
        casualChat,
        specificQuestions,
        text
      );
    } else if (text.match(/thank/gi)) {
      product = "You're welcome!";
    } else if (text.match(/(robot|bot|robo)/gi)) {
      product = robot[Math.floor(Math.random() * robot.length)];
    } else {
      product = alternativePrompts[Math.floor(Math.random() * alternativePrompts.length)];
    }
  
    const delay = input.split(" ").length * 100;
    setTimeout(() => {
      addChat(BOT_NAME, BOT_IMG, "left", product);
    }, delay);
  }
  
  function compare(promptsArray, repliesArray, string) {
    let reply;
    let replyFound = false;
    for (let x = 0; x < promptsArray.length; x++) {
      for (let y = 0; y < promptsArray[x].length; y++) {
        if (promptsArray[x][y] === string) {
          let replies = repliesArray[x];
          reply = replies[Math.floor(Math.random() * replies.length)];
          replyFound = true;
          break;
        }
      }
      if (replyFound) {
        break;
      }
    }
    return reply;
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
    messagerChat.scrollTop += 500;
  }
  
  function get(selector, root = document) {
    return root.querySelector(selector);
  }
  
  function formatDate(date) {
    const h = "0" + date.getHours();
    const m = "0" + date.getMinutes();
    return `${h.slice(-2)}:${m.slice(-2)}`;
  }
  
  function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  