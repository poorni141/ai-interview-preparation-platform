const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());

// Display the frontend
app.use(express.static(path.join(__dirname, "../public")));

// Test API
app.get("/api", (req, res) => {
    res.json({
        message: "Welcome to AI Interview Preparation Platform!"
    });
});

// Interview questions
const questions = {
    Java: [
        "What is Java?",
        "What is inheritance in Java?",
        "What is a class and an object?"
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

// Get a random interview question
app.get("/api/questions/:topic", (req, res) => {
    const topic = req.params.topic;
    const topicQuestions = questions[topic];

    if (!topicQuestions) {
        return res.status(404).json({
            message: "Topic not found"
        });
    }

    const randomIndex = Math.floor(
        Math.random() * topicQuestions.length
    );

    res.json({
        topic: topic,
        question: topicQuestions[randomIndex]
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
