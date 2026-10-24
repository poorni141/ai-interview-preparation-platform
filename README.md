# AI Interview Preparation Platform

## 📌 Project Overview

The AI Interview Preparation Platform is a web-based application designed to help students practise interview questions for technical and HR interviews. Users can select a topic, answer questions, and receive basic feedback on their responses.

## 🎯 Objectives

* Help students practise interview questions.
* Improve interview preparation and confidence.
* Provide basic feedback on submitted answers.
* Offer a simple and user-friendly interface.

## ✨ Features

* Topic selection for Java, Python, SQL, and HR interviews.
* Random interview question generation from predefined question sets.
* Answer submission through a text area.
* Basic answer-length-based scoring and feedback.
* Word count and improvement suggestions.
* Responsive web interface.

## 🛠️ Technologies Used

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js, Express.js

## 📂 Project Structure

```text
ai-interview-preparation-platform/
├── public/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── server/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
└── .gitignore
```

## 🚀 How to Run the Project

### Prerequisites

Install Node.js on your computer.

### Steps

1. Clone or download this repository.

2. Open the project folder in VS Code.

3. Open the terminal.

4. Navigate to the server directory:

   ```bash
   cd server
   ```

5. Install the dependencies:

   ```bash
   npm install
   ```

6. Start the server:

   ```bash
   node server.js
   ```

7. Open your browser and visit:

   `http://localhost:3000`

## ⚙️ How It Works

1. Select an interview topic.
2. Click the button to get a question.
3. Type your answer in the answer box.
4. Click the feedback button.
5. Review the basic score, word count, and improvement suggestion.

**Note:** The current version uses predefined questions and basic answer-length-based scoring. It does not yet use an AI model to evaluate answers.

## 🔮 Future Enhancements

* Integrate an AI API for intelligent answer evaluation.
* Add user registration and login.
* Save interview practice history.
* Provide topic-wise performance reports.
* Add speech-based interview practice.

## 👩‍💻 Author

Developed as a student project to support interview preparation and practice.
