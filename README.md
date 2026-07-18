# AI-Email-Reply-Generator

An AI-powered Email Reply Generator that creates professional email responses using the **Google Gemini API**. The project consists of a **React frontend**, **Spring Boot backend**, and a **Chrome Extension** that integrates directly with Gmail.

---
## 🚀 Features

- ✨ Generate AI-powered email replies
- 🎭 Choose different reply tones
  - Professional
  - Friendly
  - Casual
- 📋 Copy generated replies with one click
- 🌐 REST API built with Spring Boot
- ⚡ Fast and responsive React UI
- 📧 Chrome Extension for Gmail integration
- 🤖 Google Gemini API integration

---

## 🛠️ Tech Stack

### Frontend
- React
- Material UI (MUI)
- Axios
- CSS

### Backend
- Java 21
- Spring Boot
- REST API
- Maven

### AI
- Google Gemini API

### Browser Extension
- Chrome Extension (Manifest V3)
- JavaScript
- HTML
- CSS

### Tools
- Git
- GitHub
- VS Code
- Spring Tool Suite (STS)

---

## 📂 Project Structure

```
AI-Email-Reply-Generator
│
├── Backend(EmailAssistant)
│   ├── src
│   ├── pom.xml
│   └── application.properties
│
├── email-writer-react
│   ├── src
│   ├── public
│   └── package.json
│
├── email-writer-ext
│   ├── manifest.json
│   ├── content.js
│   └── content.css
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/poonamwagh9161-gif/AI-Email-Reply-Generator.git
```

---

### 2. Backend Setup

Navigate to the backend folder.

```bash
cd Backend(EmailAssistant)
```

Open the project in **Spring Tool Suite (STS)** or **IntelliJ IDEA**.

Configure your Gemini API key inside:

```
application.properties
```

```properties
gemini.api.key=YOUR_GEMINI_API_KEY
```

Run the Spring Boot application.

Backend URL

```
http://localhost:9090
```

---

### 3. Frontend Setup

Navigate to the React project.

```bash
cd email-writer-react
```

Install dependencies

```bash
npm install
```

Run the application

```bash
npm run dev
```

Frontend URL

```
http://localhost:5173
```

---

### 4. Chrome Extension

Open Chrome

Go to

```
chrome://extensions
```

Enable **Developer Mode**

Click

```
Load Unpacked
```

Select the

```
email-writer-ext
```

folder.

Open Gmail and click **Reply**.

The **🤖 AI Reply** button will appear next to the Send button.

---


## 🔄 Workflow

```
User enters email
        │
        ▼
React Frontend
        │
        ▼
Spring Boot REST API
        │
        ▼
Google Gemini API
        │
        ▼
Generated Email Reply
        │
        ▼
React UI / Gmail Chrome Extension
```

---

## 🌟 Future Improvements

- User authentication
- Email history
- Multiple AI models
- Dark mode
- Custom prompts
- Download reply as PDF
- Multi-language support

---

## 👩‍💻 Author

**Poonam Wagh**

GitHub:
https://github.com/poonamwagh9161-gif

---

## ⭐ Support

If you like this project, please consider giving it a ⭐ on GitHub.
