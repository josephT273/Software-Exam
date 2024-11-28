const questions = [
  {
    question: "What is the primary goal of software engineering?",
    options: [
      "Develop hardware systems",
      "Create artistic designs",
      "Develop reliable and efficient software",
      "Manufacture physical products"
    ],
    correct: 2,
    explanation: "Software engineering focuses on creating reliable, efficient software systems using engineering principles."
  },
  {
    question: "Which model emphasizes flexibility, iteration, and stakeholder involvement?",
    options: ["Waterfall", "Agile", "Spiral", "V-Model"],
    correct: 1,
    explanation: "Agile is designed for flexibility and incorporates iterative development and stakeholder feedback throughout the process."
  },
  {
    question: "What is the key feature of the Incremental model?",
    options: [
      "Parallel development of components",
      "Early delivery of working software",
      "Complete delivery at the end",
      "Skipping the design phase"
    ],
    correct: 1,
    explanation: "The Incremental model allows early delivery of partial functionality, reducing risk and accommodating changes."
  },
  {
    question: "Which Agile practice focuses on writing tests before the actual code?",
    options: [
      "Pair programming",
      "Refactoring",
      "Test-Driven Development (TDD)",
      "Kanban"
    ],
    correct: 2,
    explanation: "Test-Driven Development (TDD) ensures code quality by writing tests before implementing the actual functionality."
  },
  {
    question: "What is the term for breaking down a project into smaller cycles in Agile?",
    options: ["Milestones", "Sprints", "Modules", "Streams"],
    correct: 1,
    explanation: "Sprints are time-boxed iterations in Agile that allow the delivery of smaller, manageable portions of the project."
  },
  {
    question: "Which model explicitly addresses risk management throughout the development process?",
    options: ["RAD", "Spiral", "V-Model", "Prototype"],
    correct: 1,
    explanation: "The Spiral model emphasizes risk analysis and iterative development to address project uncertainties."
  },
  {
    question: "Which of the following is NOT a principle of Agile development?",
    options: [
      "Individuals and interactions over processes and tools",
      "Responding to change over following a plan",
      "Delivering software only at the end of the project",
      "Customer collaboration over contract negotiation"
    ],
    correct: 2,
    explanation: "Agile focuses on continuous delivery, collaboration, and adaptability rather than waiting until the end to deliver software."
  },
  {
    question: "In the V-Model, system design is verified through which testing phase?",
    options: ["Unit testing", "Integration testing", "Acceptance testing", "System testing"],
    correct: 1,
    explanation: "Integration testing ensures that system design components interact and work together as intended."
  },
  {
    question: "What does 'RAD' stand for in software engineering?",
    options: [
      "Rapid Application Development",
      "Regular Application Design",
      "Real-time Agile Development",
      "Risk Analysis Development"
    ],
    correct: 0,
    explanation: "Rapid Application Development (RAD) emphasizes quick prototyping and iterative feedback from users."
  },
  {
    question: "What is the purpose of refactoring in Agile?",
    options: [
      "Add new features",
      "Improve code structure",
      "Skip testing",
      "Eliminate customer feedback"
    ],
    correct: 1,
    explanation: "Refactoring improves code readability, maintainability, and structure without changing its behavior."
  },
  {
    question: "Which software component focuses on instructions for task execution?",
    options: ["Libraries", "Data", "Program", "User interface"],
    correct: 2,
    explanation: "Programs are executable code that directly instructs machines to perform tasks."
  },
  {
    question: "Which phase of the Waterfall model involves collecting and analyzing requirements?",
    options: ["Testing", "Implementation", "Maintenance", "Requirements gathering and analysis"],
    correct: 3,
    explanation: "The Requirements Gathering phase defines the project's goals and functionalities before design and development."
  },
  {
    question: "Which Agile principle prioritizes customer satisfaction?",
    options: [
      "Sustainable pace",
      "Simplicity",
      "Frequent delivery of working software",
      "Early and continuous delivery"
    ],
    correct: 3,
    explanation: "Agile ensures customer satisfaction through early and continuous delivery of valuable software."
  },
  {
    question: "Which methodology uses a Kanban board to visualize tasks?",
    options: ["Scrum", "Lean", "Kanban", "RAD"],
    correct: 2,
    explanation: "Kanban uses visual boards to track progress and limit work in progress, ensuring efficient workflow management."
  },
  {
    question: "What is the primary disadvantage of the Waterfall model?",
    options: [
      "High flexibility",
      "Emphasis on testing",
      "Inability to handle changes easily",
      "Low clarity of phases"
    ],
    correct: 2,
    explanation: "Waterfall’s sequential nature makes it inflexible to accommodate changes after the project begins."
  },
  {
    question: "In the Agile methodology, what is the main purpose of retrospectives?",
    options: [
      "Plan the next sprint",
      "Reflect on improvements",
      "Deliver features",
      "Analyze system risks"
    ],
    correct: 1,
    explanation: "Retrospectives focus on reflecting and identifying improvements for future sprints."
  },
  {
    question: "What does modularity in software design refer to?",
    options: [
      "Grouping all components into one",
      "Breaking software into smaller components",
      "Ignoring unnecessary details",
      "Focusing only on data"
    ],
    correct: 1,
    explanation: "Modularity divides software into smaller, manageable components for easier maintenance and development."
  },
  {
    question: "What type of software manages hardware resources?",
    options: ["Application software", "System software", "Web software", "Embedded software"],
    correct: 1,
    explanation: "System software, such as operating systems, manages and controls hardware resources for application software."
  },
  {
    question: "Which Agile framework uses time-boxed iterations called sprints?",
    options: ["XP", "Scrum", "Lean", "Spiral"],
    correct: 1,
    explanation: "Scrum organizes work into sprints, allowing incremental and iterative delivery."
  },
  {
    question: "What does 'testability' ensure in software quality?",
    options: [
      "Easy adaptability to new systems",
      "Bugs can be easily identified and fixed",
      "High performance",
      "Secure operations"
    ],
    correct: 1,
    explanation: "Testability ensures software can be tested effectively to identify and resolve bugs."
  }
  // Continue adding up to 30 questions in this format
];

// State
let currentQuestionIndex = 0;

// Load Question
function loadQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById("question-text").innerText = question.question;
  const optionsList = document.getElementById("options");
  optionsList.innerHTML = "";

  question.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.innerText = option;
    li.onclick = () => selectAnswer(index);
    optionsList.appendChild(li);
  });

  document.getElementById("explanation-text").innerText = "";
}

// Select Answer
function selectAnswer(index) {
  const question = questions[currentQuestionIndex];
  const explanation = document.getElementById("explanation-text");

  if (index === question.correct) {
    explanation.innerText = "Correct! " + question.explanation;
  } else {
    explanation.innerText = "Incorrect. " + question.explanation;
  }
}

// Next Question
function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  }
}

// Previous Question
function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
  }
}

// Submit Exam
function submitExam() {
  alert("Exam submitted! Review your answers and explanations.");
}

// Initialize
document.addEventListener("DOMContentLoaded", loadQuestion);

