const questions = {
    Java: [
        "What is Java?",
        "What is inheritance in Java?",
        "What is the difference between a class and an object?"
    ],
    Python: [
        "What is Python?",
        "What is a list in Python?",
        "What is a function in Python?"
    ],
    SQL: [
        "What is SQL?",
        "What is a primary key?",
        "What is a foreign key?"
    ],
    HR: [
        "Tell me about yourself.",
        "What are your strengths?",
        "Why should we hire you?"
    ]
};

let currentQuestion = "";

const topicSelect = document.getElementById("topic");
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const feedbackElement = document.getElementById("feedback");

document.getElementById("questionButton").addEventListener("click", function () {
    const topic = topicSelect.value;
    const topicQuestions = questions[topic];

    const randomIndex = Math.floor(Math.random() * topicQuestions.length);

    currentQuestion = topicQuestions[randomIndex];

    questionElement.textContent = currentQuestion;
    answerElement.value = "";
    feedbackElement.textContent = "Write your answer and click Get Feedback.";
});

document.getElementById("feedbackButton").addEventListener("click", function () {
    const answer = answerElement.value.trim();

    if (!currentQuestion) {
        feedbackElement.textContent = "Please click Get Question first.";
        return;
    }

    if (answer.length === 0) {
        feedbackElement.textContent = "Please enter your answer.";
        return;
    }

    const wordCount = answer.split(/\s+/).length;
    let score;
    let feedback;
    let suggestion;

    if (wordCount < 5) {
        score = 2;
        feedback = "Your answer is too short.";
        suggestion = "Explain the concept with a definition and an example.";
    } else if (wordCount < 15) {
        score = 5;
        feedback = "Good start! You have provided some information.";
        suggestion = "Add more important points and a practical example.";
    } else {
        score = 8;
        feedback = "Good effort! Your answer contains useful details.";
        suggestion = "Make sure your answer is accurate and directly addresses the question.";
    }

    feedbackElement.innerHTML = `
        <h3>Interview Feedback</h3>
        <p><strong>Score:</strong> ${score}/10</p>
        <p><strong>Feedback:</strong> ${feedback}</p>
        <p><strong>Suggestion:</strong> ${suggestion}</p>
        <p><strong>Word Count:</strong> ${wordCount}</p>
    `;
});

console.log("Interview Preparation Platform loaded successfully!");