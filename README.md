# 🧠 Smart Research Assistant

## 📌 Overview
Smart Research Assistant is an AI-powered Chrome extension integrated with a Spring Boot backend.  
It allows users to quickly summarize selected text from any webpage using Google Gemini AI and store research notes locally for future reference.

This project focuses on improving research productivity and demonstrates full-stack development with AI integration.

---

## 🚀 Features
- 🔍 Summarize selected text from any webpage
- 🤖 AI-powered summarization using Google Gemini
- 📝 Save, view, and delete research notes
- 🌐 Chrome Side Panel integration
- ⚡ Real-time frontend–backend communication
- 🎨 Responsive and modern UI
- 🛡️ CORS-enabled REST API

---

## 🏗️ Architecture
**Frontend (Chrome Extension)**
- HTML, CSS, JavaScript
- Chrome Extension APIs (Manifest V3)
- Chrome Storage API

**Backend (Spring Boot)**
- RESTful APIs
- WebClient for AI calls
- DTO-based request handling
- Lombok for boilerplate reduction

**AI Layer**
- Google Gemini API for text processing

---

## 🔄 Workflow
1. User selects text on a webpage  
2. Chrome extension captures selected text  
3. Request sent to Spring Boot backend  
4. Backend constructs prompt and calls Gemini API  
5. AI-generated summary is returned  
6. Result displayed in the side panel  
7. Notes can be saved locally  

---

## 🔗 API Endpoint
| Method | Endpoint | Description |
|------|---------|------------|
| PATCH | `/api/research/process` | Summarize or suggest content |

---

## 📦 Tech Stack
### Backend
- Java
- Spring Boot
- Spring WebClient
- Lombok

### Frontend
- HTML5
- CSS3
- JavaScript (ES6)
- Chrome Extension APIs

### AI
- Google Gemini API

---

## 🛡️ Security & CORS
- CORS enabled for extension-backend communication
- API key stored in application properties
- Structured DTO-based request validation

---

## 🧪 Error Handling
- Handles empty text selection
- API error responses
- Safe AI response parsing
- User-friendly error messages

---

## 🧠 Learning Outcomes
- Chrome Extension development (Manifest V3)
- AI API integration
- Spring Boot REST API design
- CORS handling
- Frontend–backend communication
- Clean architecture using DTOs

---

## 🔮 Future Enhancements
- Multi-language summarization
- Additional AI operations (keywords, Q&A)
- User authentication
- Cloud deployment (AWS / GCP)
- Note synchronization across devices

---

## ▶️ How to Run
### Backend
1. Clone the repository
2. Configure Gemini API key in `application.properties`
3. Run the Spring Boot application

### Chrome Extension
1. Open Chrome → `chrome://extensions`
2. Enable **Developer Mode**
3. Click **Load unpacked**
4. Select the extension folder

---

## 👩‍💻 Author
**Sakshi Koganole**  
AI & Backend Developer  
Spring Boot | Chrome Extensions | AI Integration  

---

## ⭐ Project Highlight
This project showcases real-world AI usage combined with browser extensions and backend services to solve research productivity challenges.
