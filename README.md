# Election Assistant (ElecAssist) 🗳️

ElecAssist is a comprehensive, interactive web application designed to educate and assist Indian citizens through the electoral process. From checking eligibility to understanding polling booth protocols, ElecAssist serves as a one-stop digital guide for democratic participation.

## 🚀 Live Demo
You can access the live application here:
**[https://election-assistant-393842975947.us-central1.run.app](https://election-assistant-393842975947.us-central1.run.app)**

---

## ✨ Key Features

- **📍 Election Timeline:** A step-by-step visual guide to the standard democratic election process.
- **🤖 AI Election Assistant:** An AI-powered chatbot with voice support to answer all your election-related queries instantly.
- **✅ Eligibility Checker:** An interactive tool that walks you through a series of questions to verify if you are eligible to vote.
- **🔍 Voter List Verification:** Check your official status by searching for your EPIC (Voter ID) number.
- **📝 Contextual Quizzes:** Test and reinforce your knowledge about the Indian electoral system with gamified quizzes.
- **📚 Cheat Notes:** Quick access to summarized facts, legalities, and essential information.
- **ℹ️ Polling Booth Guide:** A clear visual guide on the "Do's and Don'ts" inside a polling station.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3 (Vanilla), JavaScript (Vanilla)
- **Design System:** Custom CSS with Glassmorphism and Modern UI aesthetics.
- **Typography:** Inter & Outfit (Google Fonts)
- **Icons:** Lucide Icons
- **Deployment:** Docker & Google Cloud Run
- **Web Server:** Nginx (Alpine-based)

---

## 📦 Local Setup

To run this project locally, you can simply open the `index.html` file in any modern web browser, or use a local development server.

### Using Docker
If you have Docker installed, you can build and run the container locally:

```bash
docker build -t election-assistant .
docker run -p 8080:80 -e PORT=80 election-assistant
```
Then visit `http://localhost:8080`.

---

## ☁️ Deployment to Cloud Run

The project is configured for source-based deployment to Google Cloud Run.

1. **Auth & Set Project:**
   ```bash
   gcloud auth login
   gcloud config set project prompt-war2-494918
   ```

2. **Deploy:**
   ```bash
   gcloud run deploy election-assistant --source . --region us-central1 --allow-unauthenticated
   ```

---

## 📄 License
This project is for educational purposes. Feel free to use and modify it.
